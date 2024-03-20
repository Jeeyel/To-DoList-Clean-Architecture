import ITodoRepository from "../../domain/repositories/ITodoRepository";

class TodoRepository extends ITodoRepository {
  constructor() {
    super();
    this.todos = []; // Assuming this is your storage mechanism, like an array for simplicity
  }

  async getAll() {
    return this.todos;
  }

  async add(todo) {
    this.todos.push(todo);
    return todo;
  }

  async remove(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}

export default TodoRepository;