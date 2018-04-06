class App extends React.Component {
  render() {
    return (
      <div>
        <Todos />
        <Goals />
      </div>
    );
  }
}

function List(props) {
  return (
    <ul>
      <li>LIST</li>
    </ul>
  );
}

class Todos extends React.Component {
  render() {
    return (
      <div>
        <h2>TODOS</h2>
        <List />
      </div>
    );
  }
}

class Goals extends React.Component {
  render() {
    return (
      <div>
        <h2>GOALS</h2>
        <List />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
