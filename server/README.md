# Project Documentation

## Overview
This document provides an overview of the project structure, files, and functionalities.

## Files and Functionalities

### `connectDb.ts`
**Purpose:** Establishes a connection to the MongoDB database using Mongoose.  
**Functionality:**
- Reads environment variables using dotenv.
- Retrieves the MongoDB connection string from environment variables.
- Uses async/await for asynchronous database connection.
- Logs database connection status.

### `env.ts`
**Purpose:** Defines environment variables and their types for the project.  
**Functionality:**
- Reads environment variables using dotenv.
- Defines an interface `EnvConfig` to specify the types of environment variables.
- Initializes environment variables such as `PORT`, `CONNECTION_STRING`, `ACCESS_TOKEN_SECRET`, `EMAIL_USER`, `EMAIL_PASS`.

### `adminControllers.ts`
**Purpose:** Contains controller functions for CRUD operations related to students in the admin section.  
**Functionality:**
- `createStudent`: Creates a new student record in the database.
- `getAllStudents`: Retrieves all student records from the database.
- `updateStudent`: Updates an existing student record in the database.
- `deleteStudent`: Deletes a student record from the database.

### `studentModel.ts`
**Purpose:** Defines the Mongoose schema for the Student model.  
**Functionality:**
- Defines an interface `IStudent` for the document structure.
- Creates a Mongoose schema `studentSchema` with required fields and unique constraints.
- Defines the Student model using the schema.

### `adminRoutes.ts`
**Purpose:** Defines API routes for handling student-related operations in the admin section.  
**Functionality:**
- Defines POST, PUT, GET, and DELETE routes for creating, updating, fetching, and deleting student records.
- Maps API endpoints to corresponding controller functions.

### `constants.ts`
**Purpose:** Defines HTTP status codes as an enum and a constants object.  
**Functionality:**
- Enum `HttpStatus` defines common HTTP status codes.
- Constants object maps status codes to their corresponding values.

### `app.ts`
**Purpose:** Configures and starts the Express server.  
**Functionality:**
- Configures middleware such as `bodyParser`, `cors`, and static file serving.
- Initializes the Express app.
- Sets up API routes.
- Starts the server on the specified port.

