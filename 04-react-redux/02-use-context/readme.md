# Thunks

There are usually three stage of an asynchronous request:

* Start of the request
* Request success
* Request failure

```js
const initialState = {
  data: [],
  isFetching: false,
  error: ''
}
```

The reducer would look like this:

```js
function reducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_DATA' :
      return {
        ...state,
        isFetching: true
      }
    case 'FETCHING_DATA_ERROR' :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case 'FETCHING_DATA_SUCCESS' :
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data
      }
  }
}
```

Action creators

```js
function fetchingData () {
  return {
    type: 'FETCHING_DATA'
  }
}
function fetchingDataError (error) {
  return {
    type: 'FETCHING_DATA_ERROR',
    error: error.msg
  }
}
function fetchingDataSuccess (data) {
  return {
    type: 'FETCHING_DATA_SUCCESS',
    data,
  }
}
```

In a component

```js
componentDidMount () {
  const { dispatch } = this.props
  dispatch(fetchingData())
  getData()
    .then((data) => dispatch(fetchingDataSuccess(data)))
    .catch((error) => dispatch(fetchingDataError(error)))
}
```

But it would be better if we did something like this:

```js
componentDidMount () {
  this.props.dispatch(fetchAndHandleData())
}
```

And in order to do so we need a **thunk**:

```js
const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  return next(action)
}
```

```js
export function fetchAndHandleData () {
  return (dispatch) => {
      dispatch(fetchingData())
      getData()
          .then((data) => dispatch(fetchingDataSuccess(data)))
          .catch((error) => dispatch(fetchingDataError(error)))
  }
}
```
