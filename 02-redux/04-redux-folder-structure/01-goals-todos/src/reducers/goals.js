import { ADD_GOAL, REMOVE_GOAL, RECEIVE_DATA } from '../actions';

export default function goals(state = [], action) {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal]);
    case REMOVE_GOAL :
      return state.filter(goal => goal.id !== action.id);
    case RECEIVE_DATA:
      return action.goals.slice();
    default:
      return state;
  }
}
