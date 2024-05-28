"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Define Mongoose schema for Student model
const studentSchema = new mongoose_1.Schema({
    UniqueId: {
        type: String,
        required: [true],
    },
    Name: {
        type: String,
        required: [true, "Please provide the name"]
    },
    Email: {
        type: String,
        required: [true, "Please provide the email"],
        unique: true,
    },
    Phone: {
        type: String,
        required: [true, "Please provide the phone number"]
    },
    EnrollNumber: {
        type: Number,
        required: [true, "Please provide the enroll number"],
        unique: true,
    },
    DateOfAdmission: {
        type: Date,
        required: [true, "Please provide the date of admission"],
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps to documents
});
// Create Mongoose model for Student using the schema
const Student = mongoose_1.default.model('Student', studentSchema);
exports.default = Student;
