/**
 * This script runs a task to check alteration files sequence:
 * Newest files should come last.
 */

import { execSync } from "child_process";

const alterationFilePrefix = "packages/schemas/alterations/";

const allAlterations = execSync("pnpm cli db alter list", {
  encoding: "utf-8",
})
  .split("\n")
  .filter((filename) => Boolean(filename))
  .map((filename) => filename.replace(".js", ""));

const diffFiles = execSync("git diff HEAD~1 HEAD --name-only --diff-filter=ACR", {
  encoding: "utf-8",
});
const committedAlterations = diffFiles
  .split("\n")
  .filter((filename) => 
    filename.startsWith(alterationFilePrefix) && 
    !filename.slice(alterationFilePrefix.length).includes("/")
  )
  .map((filename) =>
    filename.replace(alterationFilePrefix, "").replace(".ts", "")
  );

for (const alteration of committedAlterations) {
  const index = allAlterations.indexOf(alteration);

  if (index < allAlterations.length - committedAlterations.length) {
    throw new Error(
      `Wrong alteration sequence for committed file: ${alteration}\nAll timestamps of committed alteration files should be greater than the biggest one in the base branch.`
    );
  }

  console.log(`✅ ${alteration}`);
}
