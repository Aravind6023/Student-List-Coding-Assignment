"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testVercel = exports.deleteStudent = exports.updateStudent = exports.getAllStudents = exports.createStudent = void 0;
const studentModel_1 = __importDefault(require("../models/studentModel"));
const constants_1 = require("../constants");
const testVercel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json("Welcome to vercel deploy");
});
exports.testVercel = testVercel;
/**
 * Controller function to create a new student.
 * @param req The request object containing student data in the body.
 * @param res The response object to send back the result.
 */
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { UniqueId, Name, Email, Phone, EnrollNumber, DateOfAdmission } = req.body;
    try {
        // Create a new student record in the database
        const savedStudent = yield studentModel_1.default.create({
            UniqueId,
            Name,
            Email,
            Phone,
            EnrollNumber,
            DateOfAdmission,
        });
        // Respond with success message and the saved student data
        res.status(constants_1.HttpStatus.CREATED).json({
            message: 'Student created successfully',
            student: savedStudent,
        });
    }
    catch (error) {
        console.error('Error creating student:', error);
        const mongoError = error;
        // Handle duplicate key error (e.g., duplicate email or enroll number)
        if (mongoError.code === 11000) {
            const duplicateKeyErrorMessage = mongoError.errmsg;
            console.error('Duplicate key error:', duplicateKeyErrorMessage);
        }
        // Respond with internal server error message
        res.status(constants_1.HttpStatus.SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
});
exports.createStudent = createStudent;
/**
 * Controller function to get all students.
 * @param req The request object (unused in this function).
 * @param res The response object to send back the list of students.
 */
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all students from the database
        const students = yield studentModel_1.default.find();
        // Respond with the list of students
        res.status(constants_1.HttpStatus.OK).json(students);
    }
    catch (error) {
        console.error('Error fetching students:', error);
        // Respond with internal server error message if an error occurs
        res.status(constants_1.HttpStatus.SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
});
exports.getAllStudents = getAllStudents;
/**
 * Controller function to update student details.
 * @param req The request object containing updated student data in the body.
 * @param res The response object to send back the updated student data.
 */
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { Name, Email, Phone, EnrollNumber, DateOfAdmission } = req.body;
    try {
        console.log(id);
        // Check if the email is already in use by another student
        const existingStudent = yield studentModel_1.default.findOne({ Email });
        if (existingStudent && existingStudent.id.toString() !== id) {
            return res.status(409).json({ message: 'Email already exists.' });
        }
        // Prepare updated document for the student
        const replacementDocument = { Name, Email, Phone, EnrollNumber, DateOfAdmission };
        // Update the student record in the database
        const result = yield studentModel_1.default.updateOne({ _id: id }, replacementDocument);
        // Check if the student was found and updated
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Student not found.' });
        }
        // Fetch and send back the updated student data
        const updatedStudent = yield studentModel_1.default.findById(id);
        res.status(200).json({ success: true, data: updatedStudent });
    }
    catch (error) {
        console.error('Error updating student details:', error.message);
        // Respond with internal server error message and the error details
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});
exports.updateStudent = updateStudent;
/**
 * Controller function to delete a student.
 * @param req The request object containing the ID of the student to delete.
 * @param res The response object to send back the result of the delete operation.
 */
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        console.log("Delete User : ", id);
        // Find and delete the student record from the database
        const student = yield studentModel_1.default.findOneAndDelete({ _id: id });
        // Check if the student was found and deleted
        if (!student) {
            return res.status(404).json({ message: 'Student not found.' });
        }
        // Respond with success message for the delete operation
        res.status(200).json({ success: true, message: 'Student deleted successfully.' });
    }
    catch (error) {
        console.error('Error deleting student:', error);
        // Respond with internal server error message if an error occurs
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.deleteStudent = deleteStudent;
