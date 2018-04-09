## Waiting Confirmation

```js
removeItem = (todo) => {
  return API.deleteTodo(todo.id)
    .then(() => {
      this.props.store.dispatch(removeTodoAction(todo.id));
    });

};
```

## Optimistic Update

```js
removeItem = (todo) => {
  this.props.store.dispatch(removeTodoAction(todo.id));
  return API.deleteTodo(todo.id)
    .catch(() => {
      this.props.store.dispatch(addTodoAction(todo));
      alert('An error occurred. Try again.');
    });
};
```

```js
addItem = (e) => {
  e.preventDefault();

  return API.saveGoal(this.input.value)
    .then((goal) => {
      this.props.store.dispatch(addGoalAction(goal));
      this.input.value = '';
    })
    .catch(() => {
      alert('An error occurred. Try again.');
    });

}
```