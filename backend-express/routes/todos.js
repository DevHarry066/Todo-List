const express = require('express');
const router = express.Router();
const { createTodo } = require('../controllers/todos');

router.route('/').post(createTodo);

module.exports = router;