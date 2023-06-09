import { RouterProvider } from 'react-router-dom';
import router from './routes';

//? In here,we just called the routes we created in the routes.tsx file.

function App() {
  return <RouterProvider router={router} />;
}

export default App;
