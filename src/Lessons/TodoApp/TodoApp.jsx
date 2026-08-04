import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import { initialState, reducer } from './reducer';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <h2>TodoApp with context and Reducer</h2>

      <TodoForm />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default TodoApp;