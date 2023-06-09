/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Public from '../layout/Public';
import React from 'react';
import Loadable from '../components/Loadable';

const Authentication = Loadable(
  React.lazy(
    async () => await import('../modules/auth/components/Authentication')
  )
);

const HomePage = Loadable(
  React.lazy(async () => await import('../modules/home/components'))
);

const router = createBrowserRouter([
  {
    path: '',
    element: <Public />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      {
        path: '/login',
        element: <Authentication />,
      },
    ],
  },
  {
    path: '/home',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
