import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    setTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, setTodos } = todosSlice.actions;

export default todosSlice.reducer;