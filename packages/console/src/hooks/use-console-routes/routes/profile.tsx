import { type RouteObject } from 'react-router-dom';

import Profile from '@/pages/Profile';
import ChangePasswordModal from '@/pages/Profile/containers/ChangePasswordModal';
import LinkEmailModal from '@/pages/Profile/containers/LinkEmailModal';
import VerificationCodeModal from '@/pages/Profile/containers/VerificationCodeModal';
import VerifyPasswordModal from '@/pages/Profile/containers/VerifyPasswordModal';

export const profile: RouteObject = {
  path: 'profile',
  children: [
    { index: true, element: <Profile /> },
    { path: 'verify-password', element: <VerifyPasswordModal /> },
    { path: 'change-password', element: <ChangePasswordModal /> },
    { path: 'link-email', element: <LinkEmailModal /> },
    { path: 'verification-code', element: <VerificationCodeModal /> },
  ],
};
