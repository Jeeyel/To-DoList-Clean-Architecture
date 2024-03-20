import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';

const AddTodoInput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    if (title.trim() !== '') {
      dispatch(addTodo({ title }));
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddTodoInput;