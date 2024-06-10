import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Paper, Table, TableContainer, Typography } from '@mui/material';
import axios from 'axios';
import { useStudentData } from '../../middleware/studentData';
import FormModal from '../Modal/FormModal';
import DeleteModal from '../Modal/DeleteModal';
import TableHeader from './TableHeader';
import TableBodyContent from './TableBodyContent';
import { DispatchAction } from '../../middleware/globalContext';
import { BasicTableProps, Inputs as FormInputs, Student } from '../../types/Types';
import { formatDateForInput } from '../../utils/Utils';
import { Stack } from '@mui/material';

const BasicTable: React.FC<BasicTableProps> = ({ searchQuery }) => {
  const { students: allStudents, loading, dispatch, refetchData } = useStudentData();
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  //To open and close the modal
  const [open, setOpen] = useState(false);
  //When the edit icon is clicked the selected Student will be stored in this state
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  //side Effect : This is Used to filter the table by getting the searchQuery
  useEffect(() => {
    const filtered = allStudents.filter((student: Student) =>
      student.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchQuery, allStudents]);

  //
  const handleOpen = (student: Student) => {
    setSelectedStudent({
      ...student,
      DateOfAdmission: formatDateForInput(student.DateOfAdmission),
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  const handleSubmit = async (data: FormInputs) => {
    if (selectedStudent) {
      dispatch({ type: DispatchAction.UPDATE_START });
      try {
        await axios.put(`http://localhost:3456/v1/admin/updatestudent/${selectedStudent._id}`, data);
        console.log("Student gets updated")
        await refetchData();
        dispatch({ type: DispatchAction.UPDATE_SUCCESS });
        console.log("Student was refetched after updating")
      } catch (error) {
        dispatch({ type: DispatchAction.UPDATE_ERROR, payload: 'Error updating student' });
        console.log("Error updating the student")
      }
    }
    handleClose();
  };

  const handleConfirmDelete = async (studentId: string) => {
    try {
      await axios.delete(`http://localhost:3456/v1/admin/deletestudent/${studentId}`);
      console.log("Student was deleted successfully")
      await refetchData();
      console.log("Student was refetched after delteing")
    } catch (error) {
      console.error('Error deleting student:', error);
      dispatch({ type: DispatchAction.UPDATE_ERROR, payload: 'Error deleting student' });
    }
    setDeleteOpen(false);
  };

  const handleDelete = (student: Student) => {
    setStudentToDelete(student);
    setDeleteOpen(true);
  };

  const handleCancelDelete = () => {
    setStudentToDelete(null);
    setDeleteOpen(false);
  };

  return (
    <Box p={4}>
      <TableContainer component={Paper}>
        <Table>
          <TableHeader />
          {loading ? (
            <Box p={2} display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircularProgress />
            </Box>
          ) : (
            <>
        {filteredStudents.length === 0 ? (
          <Stack width='100%'>
          <Typography p={2} textAlign='center'>No student record found</Typography>
          </Stack>
        ) : (
          <TableBodyContent
            students={filteredStudents}
            handleOpen={handleOpen}
            handleDelete={handleDelete}
          />
        )}
      </>
          ) }
        </Table>
      </TableContainer>
      <FormModal
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        defaultValues={selectedStudent || {
          _id: '',
          UniqueId: '',
          Name: '',
          Email: '',
          Phone: '',
          EnrollNumber: '',
          DateOfAdmission: '',
        }}
        isEditMode={!!selectedStudent}
      />
      <DeleteModal
        open={deleteOpen}
        onClose={handleCancelDelete}
        onConfirm={() => handleConfirmDelete(studentToDelete?._id || '')}
        student={studentToDelete}
      />
    </Box>
  );
};

export default BasicTable;
