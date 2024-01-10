/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function GoalItem({ id, text, deleteGoal }) {
  return (
    <>
      <div>
        <span>{text}</span>
        <button onClick={() => deleteGoal(id)}>x</button>
      </div>
    </>
  );
}
