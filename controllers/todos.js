import { Todo } from '../models/todo.js';

class TodoController {
    constructor() {
        this.TODOS = [];
    }

    createTodo = (req, res) => {
        const task = req.body.task;
        const newTodo = new Todo(task);
        this.TODOS.push(newTodo);
        res.status(201).json({
            message: 'Created the todo.',
            createdTodo: newTodo
        });
    }

    getTodos = (req, res) => {
        res.json({ todos: this.TODOS });
    }
}

export const todoController = new TodoController();