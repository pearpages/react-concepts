# Redux

## reducers

```js
import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
    searchTerm: ''
}

function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action);
        default:
            return state;
    }
}

function setSearchTerm(state, action) {
    return Object.assign({}, state, { searchTerm: action.searchTerm });
}

export default rootReducer;
```

## actions

```js
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
```

## actionCreators

```js
import { SET_SEARCH_TERM } from './actions';

export function setSearchTerm(searchTerm) {
    return { type: SET_SEARCH_TERM, searchTerm: searchTerm };
}
```

## store

```js
import {createStore} from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

export default store;
```