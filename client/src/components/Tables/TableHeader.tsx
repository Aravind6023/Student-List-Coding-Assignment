import React from 'react';
import { TableHead, TableRow, TableCell, useTheme, useMediaQuery } from '@mui/material';

const TableHeader: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableHead sx={{ backgroundColor : 'rgba(249, 250, 251, 1)', }}>
      <TableRow>
        <TableCell sx={{ paddingLeft: '30px', color : 'rgba(107, 114, 128, 1)',  }}>NAME</TableCell>
        <TableCell sx={{ color : 'rgba(107, 114, 128, 1)' }}>Email</TableCell>
        {!isSmallScreen && <TableCell sx={{ color : 'rgba(107, 114, 128, 1)' }} align="left">PHONE</TableCell>}
        {!isSmallScreen && <TableCell sx={{ color : 'rgba(107, 114, 128, 1)' }} align="left">ENROLL NUMBER</TableCell>}
        {!isSmallScreen && <TableCell sx={{ color : 'rgba(107, 114, 128, 1)' }} align="left">DATE OF ADMISSION</TableCell>}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
