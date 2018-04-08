const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

function loading(state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

const thunk = (store) => (next) => (action) => {
  if (typeof action == 'function') {
    return action(store.dispatch);
  }

  return next(action);
}