import type { AdminConsoleKey } from '@logto/phrases';
import classNames from 'classnames';
import type { ReactElement, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import Tip from '@/assets/icons/tip.svg';

import type DangerousRaw from '../DangerousRaw';
import DynamicT from '../DynamicT';
import IconButton from '../IconButton';
import Spacer from '../Spacer';
import { ToggleTip } from '../Tip';
import type { Props as ToggleTipProps } from '../Tip/ToggleTip';

import * as styles from './index.module.scss';

export type Props = {
  readonly title: AdminConsoleKey | ReactElement<typeof DangerousRaw>;
  readonly description?: AdminConsoleKey | ReactElement<typeof DangerousRaw>;
  readonly descriptionPosition?: 'top' | 'bottom';
  readonly children: ReactNode;
  readonly isRequired?: boolean;
  readonly isMultiple?: boolean;
  readonly className?: string;
  readonly headlineSpacing?: 'default' | 'large';
  readonly headlineClassName?: string;
  readonly tip?: ToggleTipProps['content'];
};

function FormField({
  title,
  description,
  descriptionPosition = 'bottom',
  children,
  isRequired,
  isMultiple,
  className,
  headlineSpacing = 'default',
  tip,
  headlineClassName,
}: Props) {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });

  return (
    <div className={classNames(styles.field, className)}>
      <div
        className={classNames(
          styles.headline,
          headlineSpacing === 'large' && styles.withLargeSpacing,
          headlineClassName
        )}
      >
        <div className={styles.title}>
          {typeof title === 'string' ? <DynamicT forKey={title} /> : title}
          {isMultiple && (
            <span className={styles.multiple}>{t('general.multiple_form_field')}</span>
          )}
        </div>
        {tip && (
          <ToggleTip anchorClassName={styles.toggleTipButton} content={tip} horizontalAlign="start">
            <IconButton size="small">
              <Tip />
            </IconButton>
          </ToggleTip>
        )}
        <Spacer />
        {isRequired && <div className={styles.required}>{t('general.required')}</div>}
      </div>
      {description && descriptionPosition === 'top' && (
        <div className={classNames(styles.description, styles.top)}>
          {typeof description === 'string' ? <DynamicT forKey={description} /> : description}
        </div>
      )}
      {children}
      {description && descriptionPosition === 'bottom' && (
        <div className={styles.description}>
          {typeof description === 'string' ? <DynamicT forKey={description} /> : description}
        </div>
      )}
    </div>
  );
}

export default FormField;
