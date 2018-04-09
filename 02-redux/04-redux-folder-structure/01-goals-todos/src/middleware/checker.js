import { ADD_TODO, ADD_GOAL } from '../actions';

export default function checker(store) {
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
