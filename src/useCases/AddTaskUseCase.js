class AddTaskUseCase {
    constructor(taskRepository) {
      this.taskRepository = taskRepository;
    }
  
    execute(task) {
      this.taskRepository.addTask(task);
    }
  }
  
  export default AddTaskUseCase;
  