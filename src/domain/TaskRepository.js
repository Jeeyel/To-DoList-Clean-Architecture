class TaskRepository {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    updateTask(updatedTask) {
      this.tasks = this.tasks.map(task => {
        if (task.id === updatedTask.id) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
    }
  
    getAllTasks() {
      return this.tasks;
    }
  
    getTask(id) {
      return this.tasks.find(task => task.id === id);
    }
  }
  
  export default TaskRepository;
  