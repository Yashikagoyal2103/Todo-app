import Todo from "../Models/Todo.js"; // Import the Todo model

//define route handler
export  async function getTodo(req, res) {
    try{
        //fetch all Todo items from database 
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data : todos,
            message: "All Todos fetched successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
}

export async function getTodoById(req, res) {
    try{
        //fetch all Todo items from database 
        const {id} = req.params;
        const todo = await Todo.findById({_id: id});

        //if data from todo by id not found(404 error)
        if (!todo) {
            return res.status(404).json({
            success: false,
            message: "No Data Found with Given Id",
            });
        }
        res.status(200).json({
            success: true,
            data : todo,
            message: "All Todos fetched successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
}


