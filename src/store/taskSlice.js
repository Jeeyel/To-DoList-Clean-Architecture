// TaskSlice.js
import { createSlice } from '@reduxjs/toolkit';
import TaskRepository from '../domain/TaskRepository';

const taskRepository = new TaskRepository();

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: taskRepository.getAllTasks(),
  },
  reducers: {
    addTask(state, action) {
      const newTask = action.payload;
      taskRepository.addTask(newTask);
      state.tasks.push(newTask);
    },
    removeTask(state, action) {
      const taskId = action.payload;
      taskRepository.removeTask(taskId);
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    updateTask(state, action) {
      const updatedTask = action.payload;
      taskRepository.updateTask(updatedTask);
      state.tasks = state.tasks.map(task => {
        if (task.id === updatedTask.id) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
