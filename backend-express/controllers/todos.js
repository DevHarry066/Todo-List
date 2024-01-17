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

exports.getTodos = async (req, res, next) => {
    const todos = await Todo.find();

    if (todos) {
        res.status(200).json({ success: true, data: todos });
    } else {
        res.status(404).json({ success: false });
    }
}

exports.getTodoById = async (req, res, next) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    if (todo) {
        res.status(200).json({ success: true, data: todo });
    } else {
        res.status(404).json({ success: false });
    }
}