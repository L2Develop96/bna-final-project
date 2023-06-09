/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Public from '../layout/Public';
import React from 'react';
import Loadable from '../components/Loadable';
import Protected from './ProtectedRoute';
import ProductDetails from '../modules/home/components/Product/ProductDetails';
import Cart from '../modules/home/components/Cart';

const Authentication = Loadable(
  React.lazy(
    async () => await import('../modules/auth/components/Authentication')
  )
);

const SignUp = Loadable(
  React.lazy(async () => await import('../modules/auth/components/SignUp'))
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
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <Protected>
        <Root />
      </Protected>
    ),
    children: [
      {
        path: '/products',
        element: <HomePage />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
