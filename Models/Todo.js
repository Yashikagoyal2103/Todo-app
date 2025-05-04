import mongoose from 'mongoose';

const todoschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50
    },
    description: {
        type:String,
        required:true,
        maxLength:50
    },
    createdAt: {
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt: {
        type:Date,
        required:true,
        default:Date.now()
    },

});

// export default mongoose.model('Todo', todoschema);
const Todo = mongoose.model('Todo', todoschema);
export default Todo;
