import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { findPackage } from '@logto/shared';

import { getPathInModule } from '../../../utils.js';

import type { AlterationFile } from './type.js';

const currentDirname = path.dirname(fileURLToPath(import.meta.url));
const alterationFilenameRegex = /-([\d.]+)-?.*\.js$/;

export const getTimestampFromFilename = (filename: string) => {
  const match = alterationFilenameRegex.exec(filename);

  if (!match?.[1]) {
    throw new Error(`Can not get timestamp: ${filename}`);
  }

  return Number(match[1]);
};

export const getAlterationDirectory = () => getPathInModule('@logto/schemas', 'alterations-js');

export const getAlterationFiles = async (): Promise<AlterationFile[]> => {
  const alterationDirectory = getAlterationDirectory();

  /**
   * We copy all alteration scripts to the CLI package root directory,
   * since they need a proper context that includes required dependencies (such as slonik) in `node_modules/`.
   * While the original `@logto/schemas` may remove them in production.
   */
  const packageDirectory = await findPackage(currentDirname);

  const localAlterationDirectory = path.resolve(
    packageDirectory ?? currentDirname,
    'alteration-scripts'
  );

  if (!existsSync(alterationDirectory)) {
    return [];
  }

  // We need to copy alteration files to execute in the CLI context to make `slonik` available
  await fs.rm(localAlterationDirectory, { force: true, recursive: true });
  await fs.cp(alterationDirectory, localAlterationDirectory, { recursive: true });

  const directory = await fs.readdir(localAlterationDirectory);
  const files = directory.filter((file) => alterationFilenameRegex.test(file));

  return files
    .slice()
    .sort((file1, file2) => getTimestampFromFilename(file1) - getTimestampFromFilename(file2))
    .map((filename) => ({ path: path.join(localAlterationDirectory, filename), filename }));
};

export const chooseRevertAlterationsByTimestamp = async (target: string) => {
  const files = await getAlterationFiles();
  const targetTimestamp = Number(target);

  if (Number.isNaN(targetTimestamp)) {
    return [];
  }

  return files.filter(({ filename }) => getTimestampFromFilename(filename) > targetTimestamp);
};
