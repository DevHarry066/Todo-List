const Todo = require('../Models/Todo');

exports.createTodo = async (req, res, next) => {
    const todo = await Todo.create(req.body);
    if (todo) {
        res.status(200).json({
            data: todo,
            success: true,
        });
    } else {
        res.status(404).json({ success: false });
    }
};