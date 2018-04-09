function checker(store) {
  const containsBitcoin = (name) => {
    return name.toLowerCase().indexOf('bitcoin') !== -1;
  };

  // this is called currying
  return function (next) {
    return function (action) {

      let hasBitcoin = false;
      switch (action.type) {
        case ADD_TODO:
          hasBitcoin = containsBitcoin(action.todo.name);
        break;
        case ADD_GOAL:
          hasBitcoin = containsBitcoin(action.goal.name);
        break;
      }

      return hasBitcoin ? alert('Nope. That is a bad idea.') : next(action);
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

const store = Redux.createStore(Redux.combineReducers({
  todos,
  goals,
  loading
}), Redux.applyMiddleware(thunk, checker, logger));