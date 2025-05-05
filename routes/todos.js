import express  from 'express';
import  createTodo from '../Controllers/createTodo.js';
import  {getTodo , getTodoById} from '../Controllers/getTodo.js'; 
import  updateTodo from '../Controllers/updateTodo.js'; 
import  deleteTodo from '../Controllers/deleteTodo.js'; 

const router = express.Router();   

router.post('/createTodo', createTodo); //Defines a POST route at /createTodo 
router.get('/getTodo', getTodo);
router.get('/getTodo/:id', getTodoById);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);

export default router;