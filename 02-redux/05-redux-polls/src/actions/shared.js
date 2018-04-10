import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { setAtuhedUser } from './authedUser';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({users, polls}) => {
        dispatch(receiveUsers(users));
        dispatch(receivePolls(polls));
        dispatch(setAuthedUser(AUTHED_ID));
      });
  }
}