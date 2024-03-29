import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Slugs } from '@/constants';
import { FormPage, Layout } from '@/pages';

export const router = createBrowserRouter([
  {
    element: <Layout testid={'layout'} />,
    children: [
      {
        path: Slugs.FORM,
        element: <FormPage />
      }
    ]
  },
  {
    path: Slugs.NOT_FOUND,
    element: <Navigate replace to={Slugs.FORM} />
  }
]);
