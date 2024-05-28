import React from 'react';
import { Box, Typography, Modal } from '@mui/material';
import CustomForm from '../Form/CustomForm';
import { FormModalProps, Inputs } from '../../types/Types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '384px',
  bgcolor: 'background.paper',
  border: '1px solid rgba(229, 231, 235, 1)',
  boxShadow: 24,
  p: 4,
  borderRadius : '6px',
};

const FormModal: React.FC<FormModalProps> = ({ open, defaultValues, onSubmit, onClose }) => {
  const initialValues: Inputs = defaultValues || {
    UniqueId: '',
    id: '',
    Name: '',
    Email: '',
    Phone: '',
    EnrollNumber: '',
    DateOfAdmission: '',
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" pb={2}>
          Edit Student
        </Typography>
        <CustomForm
          onSubmit={onSubmit}
          initialValues={initialValues}
          submitButtonText="Update"
          handleCancel={onClose}
        />
      </Box>
    </Modal>
  );
};

export default FormModal;
