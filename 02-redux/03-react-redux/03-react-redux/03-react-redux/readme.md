# React Redux

```js
const ConnectedApp = ReactRedux.connect((state) => ({
  loading: state.loading
}))(App);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnectedApp />
  </ReactRedux.Provider>,
  document.getElementById('app')
);
```

```js
const ConnectedTodos = ReactRedux.connect((state) => ({
  todos: state.todos
}))(Todos);
```

```js
const ConnectedGoals = ReactRedux.connect((state) => ({
  goals: state.goals
}))(Goals);
```