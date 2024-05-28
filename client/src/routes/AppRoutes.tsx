import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import CreateStudent from '../pages/CreateStudent';

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/CreateStudent',
      element: <CreateStudent />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
};

export default AppRoutes;
