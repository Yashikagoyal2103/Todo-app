const express = require('express');
const app = express();

// Load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Mount todo API routes
app.use('/api/v1', require('./routes/todos.js'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});

// Connect to the database
const connectDB = require('./config/Database.js');
connectDB();

// Root route
app.get("/", (req, res) => {
    res.send(`API is running on port ${PORT}`); // Fixed string interpolation
});