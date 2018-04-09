# Connect

Render any component, passing that component any data it needs from the store.

```js
const ConnectedApp = connect((state) => ({
  loading: state.loading
}))(App);
```

```js
function connect(mapStateToProps) {
  return (Component) => {
    class Receiver extends React.Component {
      componentDidMount() {
        const { subscribe } = this.props.store;
        this.unsubscribe = subscribe(() => this.forceUpdate());
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const { dispatch, getState } = this.props.store;
        const state = getState();
        const stateNeeded = mapStateToProps(state);
        return <Component {...stateNeeded} dispatch={dispatch} />
      }
    }

    class ConnectedComponent extends React.Component {
      render() {
        return (
          <Context.Consumer>
            {(store) => <Receiver store={store} />}
          </Context.Consumer>
        );
      }
    }

    return ConnectedComponent;
  };
}
```
