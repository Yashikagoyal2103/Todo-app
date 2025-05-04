import Todo from '../Models/Todo.js'; // Import the Todo model

const createTodo = async (req, res) => {
    try {
        //extract title and desxcription from reauest body
        const { title, description } = req.body;

        // Create a new Todo entry in the database
        const response = await Todo.create({ title, description });

        // Send a success response
        res.status(200).json({
            success: true, 
            data: response, 
            message: "Entry created successfully"
        })
    } catch (err) {
        console.error("Error in creating todo:", err);

        // Send an error response
        res.status(500).json({
            success: false, 
            data: "Internal server error", 
            message: err.message
        })
    }
}

export default createTodo; 


