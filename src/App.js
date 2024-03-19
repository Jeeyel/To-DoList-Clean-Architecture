import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import AddTaskUseCase from './useCases/AddTaskUseCase';
import TaskRepository from './domain/TaskRepository';
const taskRepository = new TaskRepository();
const addTaskUseCase = new AddTaskUseCase(taskRepository);
function App() {
  return (
    <div>
      <h1>Todo List App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
