import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectDb = async (): Promise<void> => {
    try {
        const connectionString = process.env.CONNECTION_STRING; // Get MongoDB connection string from environment variables
        if (!connectionString) 
            throw new Error("CONNECTION_STRING is not defined in the environment variables");

        // Connect to MongoDB using Mongoose
        const connect = await mongoose.connect(connectionString);
        console.log("Database Connected:", connect.connection.name); // Log successful database connection
    } catch (err) {
        console.error("Error connecting to the database:", err); // Log error if database connection fails
        process.exit(1); // Exit the process with error code 1
    }
}

export default connectDb;
