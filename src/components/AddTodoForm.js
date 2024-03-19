import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTask } from '../store/taskSlice';
import AddTaskUseCase from '../useCases/AddTaskUseCase';

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;

    const addTaskUseCase = new AddTaskUseCase();
    addTaskUseCase.execute({ id: Date.now(), title });

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
