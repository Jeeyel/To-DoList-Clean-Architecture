import TaskRepository from '../repositories/TaskRepository';

class AddTodoUseCase {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(task) {
    this.taskRepository.addTask(task);
  }
}

export default AddTodoUseCase;