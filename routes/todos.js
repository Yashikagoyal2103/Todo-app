import express  from 'express';
import  createTodo from '../Controllers/createTodo.js'; 
const router = express.Router();   

router.post('/createTodo', createTodo); //Defines a POST route at /createTodo 

export default router;