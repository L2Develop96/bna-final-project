import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Public from '../layout/Public';
import Authentication from '../modules/auth/components/Authentication';
import HomePage from '../modules/home/components/HomePage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Public />,
    children: [
      {
        path: '',
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
