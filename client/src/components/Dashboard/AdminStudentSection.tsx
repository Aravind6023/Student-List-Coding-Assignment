import React, { useState } from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import SearchField from '../SearchInputs/SearchField';
import CustomButton from '../Button/CustomButton';
import BasicTable from '../Tables/Table';
import { AdminStudentSectionProps } from '../../types/Types';

const AdminStudentSection: React.FC<AdminStudentSectionProps> = ({ checkMediumScreen }) => {
  
  const navigate = useNavigate();
  const isSmallerScreen = useMediaQuery('(max-width : 462px');
  const isXtraSmallerScreen = useMediaQuery('(max-width : 300px)');
  const isMediumScreen = useMediaQuery('(max-width : 700px)');

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCreateStudentPage = () => {
    navigate('createStudent');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: 'rgba(229, 231, 235, 1)' }} >
      <Header />
      <Stack p={3.5} gap={3} direction= {isSmallerScreen ? 'column' : 'row'} justifyContent='space-between' alignItems={ isSmallerScreen ? 'flex-start' : 'center'}>
        <Typography fontWeight={500} pl={isSmallerScreen ? 2 : 0} variant="h4" component="div">Students</Typography>
        <Stack className="searchContainer" direction={ !isXtraSmallerScreen ? 'row' : 'column'} gap={2} alignContent="center" alignItems="center">
          <SearchField onSearch={handleSearch} />
          <CustomButton
            placeholderValue={!isMediumScreen ? "add new student" : 'add'}
            functionName={handleCreateStudentPage}
            textCap="uppercase"
            bgColor='rgba(34, 197, 94, 1)'
          />
        </Stack>
      </Stack>
      <BasicTable searchQuery={searchQuery} />
    </Box>
  );
};

export default AdminStudentSection;
