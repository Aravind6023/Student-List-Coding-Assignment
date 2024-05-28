import React from 'react';
import { Button } from '@mui/material';
import { CustomButtonProps } from '../../types/Types';

const CustomButton: React.FC<CustomButtonProps> = ({ bgColor, placeholderValue, textCap, buttonWidth, functionName }) => {
  return (
    <Button
      variant="contained"
      onClick={functionName}
      style={{ 
        textTransform: textCap,
        backgroundColor : bgColor,
        padding : '12px 12px',
        width: buttonWidth
      }} >
      {placeholderValue}
    </Button>
  );
};

export default CustomButton;
