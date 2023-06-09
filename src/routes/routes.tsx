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
      //TODO: <SignUp /> Component will be added in here as a children like the <Authentication /> Component.
    ],
  },
  {
    //? Rename the home path to products later so it makes sense since our home page will consist of displaying the products.
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
