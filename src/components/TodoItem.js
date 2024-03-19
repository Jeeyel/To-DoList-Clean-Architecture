// TodoItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../store/taskSlice';
import UpdateTaskForm from './UpdateTaskForm';
import RemoveTaskUseCase from '../useCases/RemoveTaskUseCase';

const TodoItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const removeTaskUseCase = new RemoveTaskUseCase(); // Instantiate the RemoveTaskUseCase

  const handleRemove = () => {
    // Dispatch the removeTask action
    // dispatch(removeTask(task.id));

    // Use the RemoveTaskUseCase to remove the task
    removeTaskUseCase.execute(task.id);
  };

  return (
    <div>
      {isEditing ? (
        <UpdateTaskForm task={task} />
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
