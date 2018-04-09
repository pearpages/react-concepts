const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

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

function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodoAction(todo.id));
    return API.deleteTodo(todo.id)
    .catch(() => {
      dispatch(addTodoAction(todo));
      alert('An error occurred. Try again.');
    });
  }
}

function handleAddTodo(name, callback) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodoAction(todo));
        callback();
      })
      .catch(() => alert('There was an error. Try again.'));

  }
}

function handleToggle(id) {
  return (dispatch) => {
    dispatch(toggleTodoAction(id));
    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodoAction(id));
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