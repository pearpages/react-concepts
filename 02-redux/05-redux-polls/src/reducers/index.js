import { combineReducers } from 'redux';
import autheduser from './authedUser';
import users from './users';
import polls from './polls';

export default combineReducers({
  autheduser,
  users,
  polls
});
