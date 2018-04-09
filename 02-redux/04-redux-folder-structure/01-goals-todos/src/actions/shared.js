import { API } from '../vendor';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  };
}

// TODO: remove from here
const store = Redux.createStore(Redux.combineReducers({
  todos,
  goals,
  loading
}), Redux.applyMiddleware(ReduxThunk.default, checker, logger));
