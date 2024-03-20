import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todos/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li>
      {todo.title}
      <button onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
};

export default TodoItem;