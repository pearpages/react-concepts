import { API } from '../vendor';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function goals(state = [], action) {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal]);
    case REMOVE_GOAL :
      return state.filter(goal => goal.id !== action.id);
    case RECEIVE_DATA:
      return action.goals.slice();
    default:
      return state;
  }
}

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));
    return API.deleteTodo(goal.id)
      .catch(() => {
        dispatch(addGoal(goal));
        alert('An error occurred. Try again.');
      });
  };
}

export function handleAddGoal(name, callback) {
  return (dispatch) => {
    return API.saveGoal(name)
    .then((goal) => {
      dispatch(addGoal(goal));
      callback();
    })
    .catch(() => {
      alert('An error occurred. Try again.');
    });
  }
}
