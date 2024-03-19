import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../store/taskSlice';

const TodoList = () => {
  const tasks = useSelector(state => state.task?.tasks || []); // Access tasks property safely
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} <button onClick={() => handleRemove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
