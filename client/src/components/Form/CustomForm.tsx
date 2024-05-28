import { Stack } from '@mui/material';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomFormProps, Inputs } from '../../types/Types';
import CustomButton from '../Button/CustomButton';
import './customForm.scss';

const CustomForm: React.FC<CustomFormProps> = ({ submitButtonText, initialValues, onSubmit, handleCancel }) => {
  const { register, handleSubmit, formState : { errors } } = useForm<Inputs>({
    defaultValues: initialValues
  });

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack direction='column'>
        <input {...register('_id')} type="hidden" />
        <input {...register('Name', { required: true })} placeholder="Name" />
        {errors.DateOfAdmission && <span>This field is required</span>}
        <input {...register('Email', { required: true })} placeholder="Email" />
        {errors.DateOfAdmission && <span>This field is required</span>}
        <input {...register('Phone', { required: true })} placeholder="Phone" />
        {errors.DateOfAdmission && <span>This field is required</span>}
        <input {...register('EnrollNumber', { required: true })} placeholder="Enroll Number" />
        {errors.DateOfAdmission && <span>This field is required</span>}
        <input {...register('DateOfAdmission', { required: true })} placeholder="Date of Admission" type='date' />
        {errors.DateOfAdmission && <span>This field is required</span>}
        <Stack px={2} py={0.5} gap={1}>
          <CustomButton
            placeholderValue={submitButtonText}
            textCap="uppercase"
            functionName={handleSubmit(onSubmitHandler)}
            bgColor="rgba(34, 197, 94, 1)"
          />
          <CustomButton
            placeholderValue="Cancel"
            textCap="uppercase"
            functionName={handleCancel}
            bgColor="rgba(197, 93, 34, 1)"
          />
        </Stack>
      </Stack>
    </form>
  );
};

export default CustomForm;
