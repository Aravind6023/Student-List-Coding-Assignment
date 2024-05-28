import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import AsideLayout from '../components/Layout/AsideLayout';
import AdminStudentSection from '../components/Dashboard/AdminStudentSection';

const HomePage: React.FC = () => {
  const checkMediumScreen = useMediaQuery('(min-width:600px)');

  return (
    <Stack direction="row" sx={{ minHeight: '100vh' }}>
      <AsideLayout />
      <AdminStudentSection checkMediumScreen={checkMediumScreen} />
    </Stack>
  );
};

export default HomePage;
