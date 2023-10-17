import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Slugs } from '@/constants';
import {
  HomePage,
} from '@/pages';
import { Layout } from "@/pages/Layout.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout testid={'layout'} />,
    children: [
      {
        path: Slugs.DASHBOARD,
        element: <HomePage />
      }
    ]
  },
  {
    path: Slugs.NOT_FOUND,
    element: <Navigate replace to={Slugs.DASHBOARD} />
  }
]);
