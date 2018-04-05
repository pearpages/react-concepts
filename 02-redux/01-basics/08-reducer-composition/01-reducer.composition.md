# Reducer Composition

combineReducers: Turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

## From

```js
function tweets (state = {}, action) {
  switch(action.type){
      case ADD_TWEET :
        ...
      case REMOVE_TWEET :
        ...
      case UPDATE_AVATAR :
        return {
          ...state,
          [action.tweetId]: {
            ...state[action.tweetId],
            author: {
              ...state[action.tweetId].author,
              avatar: action.newAvatar
            }
          }
        }
  }
}
```

## To

```js
function author (state, action) {
  switch (action.type) {
      case : UPDATE_AVATAR
        return {
          ...state,
          avatar: action.newAvatar
        }
      default :
        state
  }
}

function tweet (state, action) {
  switch (action.type) {
      case ADD_TWEET :
        ...
      case REMOVE_TWEET :
        ...
      case : UPDATE_AVATAR
        return {
          ...state,
          author: author(state.author, action)
        }
      default :
        state
  }
}

function tweets (state = {}, action) {
  switch(action.type){
      case ADD_TWEET :
        ...
      case REMOVE_TWEET :
        ...
      case UPDATE_AVATAR :
        return {
          ...state,
          [action.tweetId]: tweet(state[action.tweetId], action)
        }
      default :
        state
  }
}
```
