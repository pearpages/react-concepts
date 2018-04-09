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
        <Todos todos={todos} store={store}/>
        <Goals goals={goals} store={store}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('app')
);
