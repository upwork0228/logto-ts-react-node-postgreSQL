import type { AdminConsoleKey } from '@logto/phrases';
import type { ReactElement, ReactNode } from 'react';

import type DangerousRaw from '@/ds-components/DangerousRaw';

export type CardSelectorOption = {
  icon?: ReactNode;
  title: AdminConsoleKey | ReactElement<typeof DangerousRaw>;
  value: string;
};

export type MultiCardSelectorOption = CardSelectorOption & {
  tag?: AdminConsoleKey;
  trailingTag?: AdminConsoleKey;
  isDisabled?: boolean;
  disabledTip?: AdminConsoleKey;
};
