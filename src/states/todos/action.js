import mockAPI from '../../utils/data/mockAPI';

/* eslint-disable no-unused-vars */
const addTodoActionCreator = ({ id, text }) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      complete: false,
    },
  };
};

const deleteTodoActionCreator = (id) => {
  return { type: 'DELETE_TODO', payload: { id } };
};

const toggleTodoActionCreator = (id) => {
  return { type: 'TOGGLE_TODO', payload: { id } };
};

function receiveTodosActionCreator(todos) {
  return {
    type: 'RECEIVE_TODOS',
    payload: {
      todos,
    },
  };
}

function asyncReceiveTodos() {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(receiveTodosActionCreator(todos));
  };
}

function asyncAddTodo(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
}

function asyncDeleteTodo(id) {
  return async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  };
}

function asyncToggleTodo(id) {
  return async (dispatch) => {
    await mockAPI.toggleTodo(id);
    dispatch(toggleTodoActionCreator(id));
  };
}

export {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
  receiveTodosActionCreator,
  asyncReceiveTodos,
  asyncAddTodo,
  asyncDeleteTodo,
  asyncToggleTodo,
};
