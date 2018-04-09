import { API } from '../vendor';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodo (id) {
  return  {
    type: TOGGLE_TODO,
    id
  }
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id)
    .catch(() => {
      dispatch(addTodo(todo));
      alert('An error occurred. Try again.');
    });
  }
}

export function handleAddTodo(name, callback) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => alert('There was an error. Try again.'));

  }
}

export function handleToggle(id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));
    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id));
        alert('An error occurred. Try again.');
      });
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
    case RECEIVE_DATA:
      return action.todos.slice();
    default:
      return state;
  }
}