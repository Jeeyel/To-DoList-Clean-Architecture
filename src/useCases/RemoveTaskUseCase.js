class RemoveTaskUseCase {
    constructor(taskRepository) {
      this.taskRepository = taskRepository;
    }
  
    execute(id) {
      this.taskRepository.removeTask(id);
    }
  }
  
  export default RemoveTaskUseCase;
  