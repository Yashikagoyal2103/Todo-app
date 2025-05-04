import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.js'; // Fix import for routes
import connectDB from './config/Database.js'; // Fix import for database connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Mount todo API routes
app.use("/api/v1", todoRoutes); // Use the imported routes

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Root route
app.get("/", (req, res) => {
    res.send(`This is homepage`);
});