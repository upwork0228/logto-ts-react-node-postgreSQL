import { builtInLanguageOptions as consoleBuiltInLanguageOptions } from '@logto/phrases';
import { useLogto } from '@logto/react';
import { Theme } from '@logto/schemas';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Globe from '@/assets/icons/globe.svg';
import Palette from '@/assets/icons/palette.svg';
import Profile from '@/assets/icons/profile.svg';
import SignOut from '@/assets/icons/sign-out.svg';
import UserAvatar from '@/components/UserAvatar';
import UserInfoCard from '@/components/UserInfoCard';
import Divider from '@/ds-components/Divider';
import Dropdown, { DropdownItem } from '@/ds-components/Dropdown';
import Spacer from '@/ds-components/Spacer';
import { Ring as Spinner } from '@/ds-components/Spinner';
import useCurrentUser from '@/hooks/use-current-user';
import useRedirectUri from '@/hooks/use-redirect-uri';
import useTenantPathname from '@/hooks/use-tenant-pathname';
import useUserPreferences from '@/hooks/use-user-preferences';
import { DynamicAppearanceMode } from '@/types/appearance-mode';
import { onKeyDownHandler } from '@/utils/a11y';

import SubMenu from './SubMenu';
import UserInfoSkeleton from './UserInfoSkeleton';
import * as styles from './index.module.scss';

function UserInfo() {
  const { signOut } = useLogto();
  const { navigate } = useTenantPathname();
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const { user, isLoading: isLoadingUser } = useCurrentUser();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const postSignOutRedirectUri = useRedirectUri('signOut');

  const [isLoading, setIsLoading] = useState(false);
  const {
    data: { language, appearanceMode },
    update,
  } = useUserPreferences();

  if (isLoadingUser) {
    return <UserInfoSkeleton />;
  }

  return (
    <>
      <div
        ref={anchorRef}
        role="button"
        tabIndex={0}
        className={classNames(styles.container, showDropdown && styles.active)}
        onKeyDown={onKeyDownHandler(() => {
          setShowDropdown(true);
        })}
        onClick={() => {
          setShowDropdown(true);
        }}
      >
        <UserAvatar user={user} />
      </div>
      <Dropdown
        hasOverflowContent
        anchorRef={anchorRef}
        className={styles.dropdown}
        isOpen={showDropdown}
        horizontalAlign="end"
        onClose={() => {
          setShowDropdown(false);
        }}
      >
        <UserInfoCard className={styles.userInfo} user={user} avatarSize="large" />
        <Divider />
        <DropdownItem
          className={classNames(styles.dropdownItem, isLoading && styles.loading)}
          icon={<Profile className={styles.icon} />}
          onClick={() => {
            navigate('/profile');
          }}
        >
          {t('menu.profile')}
        </DropdownItem>
        <Divider />
        <SubMenu
          className={styles.dropdownItem}
          icon={<Globe className={styles.icon} />}
          title="menu.language"
          options={consoleBuiltInLanguageOptions}
          selectedOption={language}
          onItemClick={(language) => {
            void update({ language });
            setShowDropdown(false);
          }}
        />
        <SubMenu
          className={styles.dropdownItem}
          icon={<Palette className={styles.icon} />}
          title="menu.appearance.label"
          options={[
            {
              value: DynamicAppearanceMode.System,
              title: t('menu.appearance.system'),
            },
            {
              value: Theme.Light,
              title: t('menu.appearance.light'),
            },
            {
              value: Theme.Dark,
              title: t('menu.appearance.dark'),
            },
          ]}
          selectedOption={appearanceMode}
          onItemClick={(appearanceMode) => {
            void update({ appearanceMode });
            setShowDropdown(false);
          }}
        />
        <Divider />
        <DropdownItem
          className={classNames(styles.dropdownItem, isLoading && styles.loading)}
          icon={<SignOut className={styles.icon} />}
          onClick={(event) => {
            event.stopPropagation();

            if (isLoading) {
              return;
            }
            setIsLoading(true);
            void signOut(postSignOutRedirectUri.href);
          }}
        >
          {t('menu.sign_out')}
          <Spacer />
          {isLoading && <Spinner className={styles.spinner} />}
        </DropdownItem>
      </Dropdown>
    </>
  );
}

export default UserInfo;
