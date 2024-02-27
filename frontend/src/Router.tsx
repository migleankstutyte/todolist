import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { HomePage } from '@pages/Home/HomePage';
import { ListPage } from '@pages/Todo/ListPage';
import { SwaggerDocs } from '@components/SwagerDocs';
import { CreatePage } from '@pages/Todo/CreatePage';
import { ItemPage } from '@pages/Todo/ItemPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/todos',
        element: <ListPage />,
      },
      {
        path: '/todos/create',
        element: <CreatePage />,
      },
      {
        path: '/todos/:id',
        element: <ItemPage />,
      },
      {
        path: '/api-docs',
        element: <SwaggerDocs />,
      },
    ],
    element: <Layout />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
