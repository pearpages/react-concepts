import React from 'react';
import Widget from './widget';
import BootButton from './boot-button';

class Composed extends React.Component {
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
        let txt = this.props.txt;
        let txt3 = this.props.txt3;
        // 1st way
        return (
            <div className="container">
            <BootButton>Whatever button with Bootstrap styles that does nothing</BootButton>
            <br/>
            <Widget update={this.update.bind(this)} />
            <h1 className="myclass">{txt} - {txt3} - {this.state.txt} - {this.state.cat}</h1>
            </div>
        )
        // 2nd way, but only can create a single node with JSX
        // return React.createElement('h1', null, 'Hello World');
    }
}

// 3rd way, Stateless Function Component
// const App = () => <h1>Hello World</h1>

Composed.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired,
    txt3(props, propName, component) {
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`);
        }
    }
}

Composed.defaultProps = {
    txt: "this is the deafult txt"
}

export default Composed;