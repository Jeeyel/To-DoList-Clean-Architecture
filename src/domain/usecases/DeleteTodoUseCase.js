import ITodoRepository from '../repositories/ITodoRepository';

class DeleteTodoUseCase {
  constructor(todoRepository) {
    if (!(todoRepository instanceof ITodoRepository)) {
      throw new Error('Invalid repository');
    }
    this.todoRepository = todoRepository;
  }

  async execute(todoId) {
    try {
      await this.todoRepository.remove(todoId);
    } catch (error) {
      throw new Error('Failed to delete todo');
    }
  }
}

export default DeleteTodoUseCase;