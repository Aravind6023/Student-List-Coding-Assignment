# Frontend Components Documentation

This document provides an overview of the frontend components used in the project.

## 1) CustomButton Component

- **Description:** Functional component for rendering a customized MUI Button.
- **Props:**
  - `bgColor`: Background color of the button.
  - `placeholderValue`: Placeholder text for the button.
  - `textCap`: Text transformation style for button text.
  - `buttonWidth`: Width of the button.
  - `functionName`: Function triggered on button click.
- **Usage:** Customizable button for various functionalities.

## 2) AdminStudentSection Component

- **Description:** Represents the admin section of the student management interface.
- **Features:**
  - Uses MUI components like Typography, Stack, and Box for layout.
  - Conditionally renders elements based on screen size using useMediaQuery.
  - Functions for navigation, search, and rendering the student table.
  - Utilizes SearchField and CustomButton components for search and adding students.
- **Integration:** Fetches and displays student data in a table using BasicTable component.

## 3) CustomForm Component

- **Description:** Renders a form with custom input fields using react-hook-form for handling and validation.
- **Props:**
  - `submitButtonText`: Text for the submit button.
  - `initialValues`: Initial values for form fields.
  - `onSubmit`: Function triggered on form submission.
  - `handleCancel`: Function for canceling form action.
- **Functionality:** Handles form submission, validation, and error messages for required fields.

## 4) AsideLayout Component

- **Description:** Represents the aside layout for side content display, such as a profile.
- **Features:**
  - Uses MUI Stack component for layout and styling.
  - Conditional rendering of profile details based on screen size using useMediaQuery.
  - Includes ProfileDetails component within the layout.

## 5) Header Component

- **Description:** Represents the header section of the application using MUI components like AppBar, Toolbar, and Typography.
- **Features:**
  - Conditional rendering of elements based on screen size using useMediaQuery.
  - Includes MobileMenuDrawer component for mobile navigation.

## 6) MobileMenuDrawer Component

- **Description:** Renders a mobile menu drawer for navigation.
- **Features:**
  - Uses MUI components like Drawer and IconButton.
  - Controls drawer opening/closing with toggleDrawer function.
  - Includes TemporaryDrawer component for temporary content display.

## 7) TemporaryDrawer Component

- **Description:** Represents a temporary drawer within the mobile menu drawer.
- **Features:**
  - Uses MUI components like Box for layout.
  - Controls drawer opening/closing with toggleDrawer function.

## 8) DeleteModal Component

- **Description:** Renders a modal dialog for confirming deletion.
- **Features:**
  - Uses MUI components like Modal, Stack, and Typography.
  - Confirms and executes deletion action with handleConfirmDelete function.
  - Includes CustomButton components for confirmation options.

## 9) FormModal Component

- **Description:** Renders a modal form for editing student details.
- **Props:**
  - `open`: Boolean for modal open state.
  - `defaultValues`: Default values for form fields.
  - `onSubmit`: Function triggered on form submission.
  - `onClose`: Function for closing the modal.
- **Integration:** Includes CustomForm component within the modal for editing details.

## 10) ProfileDetails Component

- **Description:** Renders user profile details using MUI components like Box, Stack, Typography, and Avatar.
- **Features:**
  - Conditional rendering of elements based on screen size using useMediaQuery.
  - Displays user's profile picture, name, and role.

## 11) SearchField Component

- **Description:** Renders a search input field using MUI Stack for layout.
- **Functionality:** Used for search functionality within the application.
