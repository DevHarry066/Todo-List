const express = require('express');
const router = express.Router();
const { createTodo, getTodos, getTodoById, updateTodoById, deleteTodoById } = require('../controllers/todos');

router.route('/').post(createTodo).get(getTodos);
router.route('/:id').get(getTodoById).put(updateTodoById).delete(deleteTodoById);

module.exports = router;