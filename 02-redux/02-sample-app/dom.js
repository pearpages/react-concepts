function generateId () {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

function addTodo () {
  const input = document.getElementById('todo');
  const name = input.value;
  input.value = '';

  store.dispatch(addTodoAction({
    id: generateId(),
    name,
    complete: false
  }));
}

function addGoal () {
  const input = document.getElementById('goal');
  const name = input.value;
  input.value = '';

  store.dispatch(addGoalAction({
    id: generateId(),
    name
  }));
}

document.getElementById('todoBtn')
  .addEventListener('click', addTodo);

document.getElementById('goalBtn')
  .addEventListener('click', addGoal);

const store = createStore(appReducer);

store.subscribe(() => {
  const { goals, todos } = store.getState();

  console.log(goals, todos);
  document.getElementById('goals').innerHTML = '';
  document.getElementById('todos').innerHTML = '';

  goals.forEach(addGoalToDom);
  todos.forEach(addTodoToDom);
});

function addTodoToDom(todo) {
  const node = document.createElement('li');
  const text = document.createTextNode(todo.name);
  node.appendChild(text);
  node.style.textDecoration = todo.complete ? 'line-through' : 'none';
  node.addEventListener('click', () => {
    store.dispatch(toggleTodoAction(todo.id));
  });
  document.getElementById('todos')
    .appendChild(node);
}

function addGoalToDom(goal) {
  const node = document.createElement('li');
  const text = document.createTextNode(goal.name);
  node.appendChild(text);
  document.getElementById('goals')
    .appendChild(node);
}