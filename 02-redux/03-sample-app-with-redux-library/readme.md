# Using Redux Library

So basicly we get rid of the **combineReducers** and the **createStore**

```js
// combineReducer
function appReducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  }
}
```

```js
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
```

And instead we use

```js
const store = Redux.createStore(Redux.combineReducers({
  todos,
  goals
}));
```