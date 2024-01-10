/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveGoals,
  asyncAddGoal,
  asyncDeleteGoal,
} from '../states/goals/action';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

export default function GoalsList() {
  const goals = useSelector((states) => states.goals); // TODO: Get goals from store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveGoals());
  }, [dispatch]);

  function onAddGoal(text) {
    // TODO: dispatch action ADD_GOAL
    // const id = `goals-${new Date().toISOString()}`;
    // dispatch(addGoalActionCreator({ id, text }));
    dispatch(asyncAddGoal(text));
  }

  function onDeleteGoal(id) {
    // TODO: dispatch action DELETE_GOAL
    // dispatch(deleteGoalActionCreator(id));
    dispatch(asyncDeleteGoal(id));
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals?.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
