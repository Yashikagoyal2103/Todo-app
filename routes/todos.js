const express = require('express');
const Router = express.Router();
const { createTodo } = require('../Controllers/createTodo');

Router.post('/createTodo', createTodo);

module.exports = Router;