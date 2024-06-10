import React from 'react';
import { Stack, Typography } from '@mui/material';
import CustomForm from '../components/Form/CustomForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Inputs } from '../types/Types';
import { useStudentData } from '../middleware/studentData';

const CreateStudent: React.FC = () => {
  const navigate = useNavigate();
  const { refetchData } = useStudentData();

  const generateUniqueId = (n: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < n; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleAddStudent = async (data: Inputs) => {
    try {
      const uniqueId = generateUniqueId(5);
      const newData = { ...data, UniqueId: uniqueId };
      console.log("datas : ", newData);
      const res = await axios.post('http://localhost:3456/v1/admin/register', newData);
      console.log(res.data.message)
      await refetchData();
      navigate('/');
    } catch (error: any) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: 'rgba(158,164,170,255)',
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <Stack
        px={6}
        py={3}
        sx={{
          width: '20%',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          border: '1px solid rgba(229, 231, 235, 1)',
          borderRadius: '6px',
          boxShadow:
            '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" pb={1.5}> Add New Student </Typography>
        <CustomForm
          submitButtonText="Submit"
          initialValues={{
            UniqueId: '',
            _id: '',
            Name: '',
            Email: '',
            Phone: '',
            EnrollNumber: '',
            DateOfAdmission: '',
          }}
          onSubmit={handleAddStudent}
          handleCancel={() => navigate('/')}
        />
      </Stack>
    </Stack>
  );
};

export default CreateStudent;
