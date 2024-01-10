/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function TodoItem({
  id,
  text,
  complete,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={complete}
      />
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>x</button>
    </div>
  );
}
