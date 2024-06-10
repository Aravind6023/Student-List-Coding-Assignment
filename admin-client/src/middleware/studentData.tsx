import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { DispatchAction } from './globalContext';
import { Student, StudentDataState } from '../types/Types';

const initialState: StudentDataState = {
  students: [],
  loading: false,
  error: null,
};

const reducer = (state: StudentDataState, action: { type: DispatchAction; payload?: any }) => {
  switch (action.type) {
    case DispatchAction.UPDATE_START:
      return { ...state, loading: true };
    case DispatchAction.UPDATE_SUCCESS:
      return { ...state, loading: false, students: action.payload || state.students };
    case DispatchAction.UPDATE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useStudentData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: DispatchAction.UPDATE_START });
      const response = await axios.get<Student[]>('http://localhost:3456/v1/admin/getallstudent');
      console.log("Data fetched successfully");
      localStorage.setItem('cachedStudentData', JSON.stringify(response.data));
      dispatch({ type: DispatchAction.UPDATE_SUCCESS, payload: response.data });
    } catch (error : any) {
      console.error("Error fetching students:", error.message);
      dispatch({ type: DispatchAction.UPDATE_ERROR, payload: 'Error fetching students' });
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedStudentData');
    if (cachedData) {
      console.log("Using cached data");
      dispatch({ type: DispatchAction.UPDATE_SUCCESS, payload: JSON.parse(cachedData) });
    } else {
      fetchData();
    }
  }, []);

  const refetchData = async () => {
    await fetchData();
  };

  return { ...state, dispatch, refetchData };
};
