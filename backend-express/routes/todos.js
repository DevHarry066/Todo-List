const express = require('express');
const router = express.Router();
const { createTodo, getTodos } = require('../controllers/todos');

router.route('/').post(createTodo).get(getTodos);

module.exports = router;