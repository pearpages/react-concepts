const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodoAction (id) {
  return  {
    type: TOGGLE_TODO,
    id
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

// Reducer function
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo => todo.id !== action.id ? todo : {
        ...todo,
        complete: !todo.complete
      });
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal]);
    case REMOVE_GOAL :
      return state.filter(goal => goal.id !== action.id);
    default:
      return state;
  }
}

function checker(store) {
  const containsBitcoin = (name) => {
    return name.toLowerCase().indexOf('bitcoin') !== -1;
  };

  // this is called currying
  return function (next) {
    return function (action) {

      if ([ADD_TODO, ADD_GOAL].includes(action.type) && containsBitcoin(action.todo.name)) {
        return alert('Nope. That is a bad idea.');
      }

      return next(action);
    }
  }
}

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action: ', action);
  const result = next(action);
  console.log('The new state: ', store.getState());
  console.groupEnd();
  return result;
};