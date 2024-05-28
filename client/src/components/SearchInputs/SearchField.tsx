import React from 'react';
import { Stack, TextField, useMediaQuery } from '@mui/material';
import { SearchFieldProps } from '../../types/Types';

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const isSmallerScreen = useMediaQuery('(max-width : 612px)');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSearch(value); 
  };

  return (
    <Stack>
      <TextField
        type="search"
        size="small"
        placeholder="Search..."
        onChange={handleChange}
        sx={{ border: '1px solid rgba(209, 213, 219, 1)', borderRadius: '6px', backgroundColor : 'rgba(255, 255, 255, 1)', width: !isSmallerScreen ? "296px" : "100%",  }}
      />
    </Stack>
  );
};

export default SearchField;
