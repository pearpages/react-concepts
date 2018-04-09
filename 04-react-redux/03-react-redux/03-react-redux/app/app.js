class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

    if (loading) {
      return (<h3>Loading...</h3>);
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

const ConnectedApp = ReactRedux.connect((state) => ({
  loading: state.loading
}))(App);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnectedApp />
  </ReactRedux.Provider>,
  document.getElementById('app')
);
