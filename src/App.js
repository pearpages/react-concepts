// Three different ways of creating a component

import React from 'react';

class App extends React.Component {

    render() {
        let txt = this.props.txt
        // 1st way
        return <h1 className="myclass">{txt}</h1> 
        // 2nd way, but only can create a single node with JSX
        // return React.createElement('h1', null, 'Hello World');
    }
}

// 3rd way, Stateless Function Component
// const App = () => <h1>Hello World</h1>

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "this is the deafult txt"
}

export default App;