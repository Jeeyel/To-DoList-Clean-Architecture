// UpdateTaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../store/taskSlice';
import UpdateTaskUseCase from '../useCases/UpdateTaskUseCase';

const UpdateTaskForm = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();
  const updateTaskUseCase = new UpdateTaskUseCase(); // Instantiate the UpdateTaskUseCase

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    // Dispatch the updateTask action
    // dispatch(updateTask({ ...task, title }));

    // Use the UpdateTaskUseCase to update the task
    updateTaskUseCase.execute({ ...task, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateTaskForm;
