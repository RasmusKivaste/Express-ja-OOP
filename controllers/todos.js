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

    updateTodo = (req, res) => {
        const todoId = req.params.id;
        const updatedTask = req.body.task;
        const todoIndex = this.TODOS.findIndex(todo => todo.id === todoId);

        if (todoIndex < 0) {
            return res.status(404).json({ message: 'Could not find todo!' });
        }

        this.TODOS[todoIndex] = new Todo(updatedTask);
        this.TODOS[todoIndex].id = todoId;
        
        res.json({ message: 'Updated!', updatedTodo: this.TODOS[todoIndex] });
    }

    deleteTodo = (req, res) => {
        const todoId = req.params.id;
        const todoIndex = this.TODOS.findIndex(todo => todo.id === todoId);

        if (todoIndex < 0) {
            return res.status(404).json({ message: 'Could not find todo!' });
        }

        this.TODOS.splice(todoIndex, 1);
        res.json({ message: 'Todo deleted!' });
    }
}

export const todoController = new TodoController();