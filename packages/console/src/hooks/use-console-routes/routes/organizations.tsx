import { condArray } from '@silverhand/essentials';
import { Navigate, type RouteObject } from 'react-router-dom';

import { isDevFeaturesEnabled } from '@/consts/env';
import OrganizationDetails from '@/pages/OrganizationDetails';
import Members from '@/pages/OrganizationDetails/Members';
import Settings from '@/pages/OrganizationDetails/Settings';
import { OrganizationDetailsTabs } from '@/pages/OrganizationDetails/types';
import Organizations from '@/pages/Organizations';

export const organizations: RouteObject = {
  path: 'organizations',
  children: condArray(
    { index: true, element: <Organizations /> },
    { path: 'create', element: <Organizations /> },
    !isDevFeaturesEnabled && {
      path: 'template',
      element: <Organizations tab="template" />,
    },
    {
      path: ':id/*',
      element: <OrganizationDetails />,
      children: [
        { index: true, element: <Navigate replace to={OrganizationDetailsTabs.Settings} /> },
        { path: OrganizationDetailsTabs.Settings, element: <Settings /> },
        { path: OrganizationDetailsTabs.Members, element: <Members /> },
      ],
    }
  ),
};
