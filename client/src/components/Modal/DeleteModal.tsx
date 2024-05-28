import React from 'react';
import { Typography, Modal, Stack } from '@mui/material';
import { DeleteModalProps } from '../../types/Types';
import CustomButton from '../Button/CustomButton';

const DeleteModal: React.FC<DeleteModalProps> = ({ open, onClose, onConfirm, student }) => {
  const handleConfirmDelete = () => {
    if (student) {
      onConfirm(student._id);
    }
    onClose();
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid rgba(229, 231, 235, 1)',
    boxShadow: 24,
    p: 4,
    borderRadius : '6px',
    maxWidth: '511px',
    maxHeight: '150px',
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Stack justifyContent='center' alignItems='center' sx={style} gap={3}>
        <Typography variant='h6' px={5}>
          Are you sure you want to delete this student?
        </Typography>
        <Stack direction='row' width='100%' gap={2}>
        <CustomButton placeholderValue='Yes' buttonWidth='100%' functionName={handleConfirmDelete} bgColor='rgba(34, 197, 60, 1)'/>
        <CustomButton placeholderValue='No' buttonWidth='100%' functionName={onClose} bgColor='rgba(197, 83, 34, 1)' />
        </Stack>
      </Stack>
    </Modal>
  );
};

export default DeleteModal;
