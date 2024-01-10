/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function GoalInput({ addGoal }) {
  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <>
      <div>
        <input type="text" value={text} onChange={onTextChangeHandler} />
        <button onClick={() => addGoal(text)}>Add goal</button>
      </div>
    </>
  );
}
