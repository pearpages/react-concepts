# Connect

Render any component, passing that component any data it needs from the store.

```js
const ConnectedApp = connect((state) => ({
  loading: state.loading
}))(App);
```