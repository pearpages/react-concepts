// Three different ways of creating a component

import React from 'react';

const Widget = (props) => <input type="text" onChange={props.update} />

class App extends React.Component {
    constructor() {
        super(); // so this gets the context of this component rather than the parent
        this.state = {
            text2: 'this is the state txt',
            cat: 0
        };
    }

    update ( e ) {
        this.setState({txt: e.target.value});
    }

    render() {
        let txt = this.props.txt
        // 1st way
        return (
            <div>
            <Widget update={this.update.bind(this)} />
            <h1 className="myclass">{txt} - {this.state.txt} - {this.state.cat}</h1>
            </div>
        )
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