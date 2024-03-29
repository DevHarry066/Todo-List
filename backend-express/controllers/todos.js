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

exports.updateTodoById = async (req, res, next) => {
    const id = req.params.id;
    const newTodo = req.body;
    const todo = await Todo.findByIdAndUpdate(id, newTodo, {
        new: true,
        runValidators: true,
    });

    if (todo) {
        res.status(200).json({ success: true, data: todo });
    } else {
        res.status(404).json({ success: false });
    }
}

exports.deleteTodoById = async (req, res, next) => {
    const id = req.params.id;
    const todo = await Todo.findByIdAndDelete(id);
    if (todo) {
        res.status(200).json({ success: true, data: null });
    } else {
        res.status(404).json({ success: false });
    }
}