import Todo from "../Models/Todo.js"; // Import the Todo model

export default async function deleteTodo (req,res) {
    try {
        const { id } = req.params; // Extract the ID from the request parameters
        await Todo.findByIdAndDelete(id); // Find and delete the Todo by ID

        res.json({
            success: true,
            message: "Todo deleted successfully" // Send a success message
        });
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }

}