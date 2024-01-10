import mockAPI from '../../utils/data/mockAPI';

/* eslint-disable no-unused-vars */
const addGoalActionCreator = ({ id, text }) => {
  return {
    type: 'ADD_GOAL',
    payload: {
      id,
      text,
    },
  };
};

const deleteGoalActionCreator = (id) => {
  return { type: 'DELETE_GOAL', payload: { id } };
};

function receiveGoalActionCreator(goals) {
  return {
    type: 'RECEIVE_GOALS',
    payload: {
      goals,
    },
  };
}

function asyncReceiveGoals() {
  return async (dispatch) => {
    const goals = await mockAPI.getGoals();
    dispatch(receiveGoalActionCreator(goals));
  };
}

function asyncAddGoal(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addGoal(text);
    dispatch(addGoalActionCreator({ id, text }));
  };
}

function asyncDeleteGoal(id) {
  return async (dispatch) => {
    await mockAPI.deleteGoal(id);
    dispatch(deleteGoalActionCreator(id));
  };
}

export {
  addGoalActionCreator,
  deleteGoalActionCreator,
  receiveGoalActionCreator,
  asyncReceiveGoals,
  asyncAddGoal,
  asyncDeleteGoal,
};
