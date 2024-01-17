const express = require('express');
const router = express.Router();
const { createTodo, getTodos, getTodoById } = require('../controllers/todos');

router.route('/').post(createTodo).get(getTodos);
router.route('/:id').get(getTodoById);

module.exports = router;