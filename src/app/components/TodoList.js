import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoInput from './AddTodoInput';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div>
      <AddTodoInput />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} /> // Assign a unique key to each TodoItem
        ))}
      </ul>
    </div>
  );
};

export default TodoList;