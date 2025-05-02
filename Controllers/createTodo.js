const express = require(' express ');
const Todo = require('../Models/Todo'); // Import the Todo model

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Create a new Todo entry in the database
        const response = await Todo.create({ title, description });

        // Send a success response
        res.status(200).json({
            success: true, // Fixed typo
            data: response, // Changed "Data" to "data" for consistency
            message: "Entry created successfully"
        });
    } catch (err) {
        console.error("Error in creating todo:", err);

        // Send an error response
        res.status(500).json({
            success: false, // Fixed typo
            data: "Internal server error", // Changed "Data" to "data" for consistency
            message: err.message
        });
    }
};


