import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import adminRoute from './src/routes/adminRoutes';
import connectDb from './src/config/dbConnections';

dotenv.config();

connectDb();

export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors({
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
app.use('/v1/admin', adminRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
