import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreateStudent from '../pages/CreateStudent';
import ErrorPage from '../pages/ErrorPage';
import { GlobalContext } from '../middleware/globalContext';
import { useStudentData } from '../middleware/studentData';

const AppRoutes: React.FC = () => {
  const { students, loading, error, dispatch, refetchData } = useStudentData();

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
    <GlobalContext.Provider value={{ students, loading, error, dispatch, refetchData }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
};

export default AppRoutes;
