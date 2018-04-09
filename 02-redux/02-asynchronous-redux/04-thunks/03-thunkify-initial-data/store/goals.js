const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

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

function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteTodo(goal.id)
      .catch(() => {
        dispatch(addGoalAction(goal));
        alert('An error occurred. Try again.');
      });
  };
}

function handleAddGoal(name, callback) {
  return (dispatch) => {
    return API.saveGoal(name)
    .then((goal) => {
      dispatch(addGoalAction(goal));
      callback();
    })
    .catch(() => {
      alert('An error occurred. Try again.');
    });
  }
}