import React from 'react';
import { TableBody, TableRow, TableCell, IconButton, useTheme, useMediaQuery, Avatar, Stack, Typography } from '@mui/material';
import {ReactComponent as EditIcon} from '../../assets/edit.svg';
import {ReactComponent as DeleteIcon} from '../../assets/Frame.svg';
import { TableBodyContentProps } from '../../types/Types';
import { formatDateForDisplay } from '../../utils/Utils';

const TableBodyContent: React.FC<TableBodyContentProps> = ({ students, handleOpen, handleDelete }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableBody>
      {students.map((student) => (
        <TableRow key={student._id}>
          <TableCell align="left" sx={{ display: 'flex', alignItems: 'center', fontWeight: '700' }}>
                    <Avatar alt='Profile-Image' sx={{ width: '2em', height: '2em', marginX: '13px' }} />
                    {student.Name}
          </TableCell>
          <TableCell>{student.Email}</TableCell>
          {!isSmallScreen && <TableCell>{student.Phone}</TableCell>}
          {!isSmallScreen && <TableCell>{student.EnrollNumber}</TableCell>}
          {!isSmallScreen && <TableCell>{formatDateForDisplay(student.DateOfAdmission)}</TableCell>}
          <TableCell>
          <Stack direction='row' spacing={1}>
            <IconButton onClick={() => handleOpen(student)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(student)}>
              <DeleteIcon />
            </IconButton>
            </Stack>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyContent;
