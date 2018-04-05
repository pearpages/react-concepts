

/*
 We expect to get:
 {
    todos: [],
    goals: []
 }
 */

function appReducer(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  }
}

// Reducer function
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.todo]);
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id !== action.id ? todo : {
        ...todo,
        complete: !todo.complete
      });
    default:
      return state;
  }
}

function goalsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_GOAL' :
      return state.concat([action.goal]);
    case 'REMOVE_GOAL' :
      return state.filter(goal => goal.id !== action.id);
    default:
      return state;
  }
}

function createStore (reducer) {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    // call reducer
    // loop over listeners and invoke them
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return {
    getState,
    subscribe,
    dispatch
  };
}

// Example
const store = createStore(appReducer);
