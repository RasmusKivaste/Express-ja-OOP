class Todo {
    constructor(task) {
        this.id = Math.random().toString();
        this.task = task;
    }
}

export { Todo };