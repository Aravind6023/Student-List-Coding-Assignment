"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const dbConnections_1 = __importDefault(require("./config/dbConnections"));
dotenv_1.default.config();
(0, dbConnections_1.default)();
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.static('public'));
exports.app.use((0, cors_1.default)({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
    credentials: true
}));
/**
 * Start the Express server on the specified port.
 */
const port = process.env.PORT || 5000;
// routes
exports.app.use('/v1/admin', adminRoutes_1.default);
exports.app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = exports.app;
