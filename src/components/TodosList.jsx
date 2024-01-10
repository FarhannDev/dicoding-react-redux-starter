/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncAddTodo,
  asyncDeleteTodo,
  asyncReceiveTodos,
  asyncToggleTodo,
} from '../states/todos/action';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

export default function TodosList() {
  const todos = useSelector((states) => states.todos); // TODO: Get todos from store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTodos());
  }, [dispatch]);

  function onAddTodo(text) {
    // TODO: dispatch action ADD_TODO
    // const id = `todo-${new Date()}`;
    // dispatch(addTodoActionCreator({ id, text }));
    dispatch(asyncAddTodo(text));
  }

  function onToggleTodo(id) {
    // TODO: dispatch action TOGGLE_TODO
    // dispatch(toggleTodoActionCreator(id));
    dispatch(asyncToggleTodo(id));
  }

  function onDeleteTodo(id) {
    // TODO: dispatch action DELETE_TODO
    // dispatch(deleteTodoActionCreator(id));
    dispatch(asyncDeleteTodo(id));
  }

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              {...todo}
              toggleTodo={onToggleTodo}
              deleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
