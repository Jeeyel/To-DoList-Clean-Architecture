import ITodoRepository from '../repositories/ITodoRepository';

class GetTodosUseCase {
  constructor(todoRepository) {
    if (!(todoRepository instanceof ITodoRepository)) {
      throw new Error('Invalid repository');
    }
    this.todoRepository = todoRepository;
  }

  async execute() {
    try {
      const todos = await this.todoRepository.getAll();
      return todos;
    } catch (error) {
      throw new Error('Failed to get todos');
    }
  }
}

export default GetTodosUseCase;