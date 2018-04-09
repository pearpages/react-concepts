class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.dispatch(handleInitialData());
    // antipattern
    store.subscribe(() => this.forceUpdate());
  }
  render() {
    const { store } = this.props;
    const { todos, goals, loading } = store.getState();

    if (loading) {
      return (<h3>Loading...</h3>);
    }
    return (
      <div>
        <Todos todos={todos} dispatch={store.dispatch}/>
        <Goals goals={goals} dispatch={store.dispatch}/>
      </div>
    );
  }
}

class ConnectedApp extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(store) => (
          <App store={store} />
        )}
      </Context.Consumer>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
