import { createContext } from 'react';
import { StudentDataState } from '../types/Types';



export const initialStudentDataState: StudentDataState = {
  students: [],
  loading: false,
  error: null,
};


export enum DispatchAction {
  UPDATE_START = 'UPDATE_START',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_ERROR = 'UPDATE_ERROR',
}

export const GlobalContext = createContext<StudentDataState>(initialStudentDataState);
