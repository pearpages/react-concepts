const Context = React.createContext();

function Parent () {
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}

function Child () {
  return (
    <div>
      <h1>Child</h1>
      <Grandchild />
    </div>
  )
}

function Grandchild() {
  return (
    <Context.Consumer>
      {(name) => (
        <div>
          <h1>Grandchild</h1>
          <h3>Name: {name}</h3>
        </div>
      )}
    </Context.Consumer>
  )
}

class App extends React.Component {
  render () {
    const name = 'PearPages';

    return (
      <Context.Provider value={name}>
        <Parent name={name} />
      </Context.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));