//CustomButton.tsx
export interface CustomButtonProps {
    placeholderValue: string;
    textCap?: "uppercase" | "none" | "capitalize";
    functionName: () => void;
    bgColor?: string;
    buttonWidth?: string;
}
  
//AminStudentSection.tsx
export interface AdminStudentSectionProps {
    checkMediumScreen: boolean;
}

//CustomForm.tsx
export type Inputs = {
    UniqueId: string;
    _id: string;
    Name: string;
    Email: string;
    Phone: string;
    EnrollNumber: string;
    DateOfAdmission: string;
};

export interface CustomFormProps {
    submitButtonText: string;
    initialValues: Inputs;
    onSubmit: (data: Inputs) => Promise<void>;
    handleCancel: () => void;
}

//MobileDrawer.tsx
export interface MobileMenuBarProps {
    open: boolean;
    toggleDrawer: (newOpen: boolean) => () => void;
}

//TemporaryDrawer.tsx
export interface TemporaryDrawerProps {
    toggleDrawer: (newOpen: boolean) => () => void;
}

//FormModal.tsx
export interface FormModalProps {
    open: boolean;
    isEditMode: boolean;
    defaultValues: Inputs;
    onSubmit: (data: Inputs) => Promise<void>;
    onClose: () => void;
}

//SearchField.tsx
export interface SearchFieldProps {
    onSearch: (query: string) => void;
}

//Table.tsx
export interface BasicTableProps {
    searchQuery: string;
}

//TableBodyContent.tsx
export interface TableBodyContentProps {
    students: Student[];
    handleOpen: (student: Student) => void;
    handleDelete: (student: Student) => void;
}

//DeleteModal.tsx
export interface DeleteModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: (studentId: string) => void;
    student: Student | null;
}

//GlobalContext.tsx
export interface StudentDataState {
    students: Student[];
    loading: boolean;
    error: string | Error | null;
}

export interface Student {
    UniqueId: string;
    _id: string;
    Name: string;
    Email: string;
    Phone: string;
    EnrollNumber: string;
    DateOfAdmission: string;
}
