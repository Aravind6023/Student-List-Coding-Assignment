"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminControllers_1 = require("../controllers/adminControllers");
const router = express_1.default.Router();
// Define API routes for student management
router.post('/register', adminControllers_1.createStudent); // Create a new student
router.put('/updatestudent/:id', adminControllers_1.updateStudent); // Update a student by ID
router.get('/getallstudent', adminControllers_1.getAllStudents); // Get all students
router.delete('/deletestudent/:id', adminControllers_1.deleteStudent); // Delete a student by ID
router.get('/', adminControllers_1.testVercel);
exports.default = router;
