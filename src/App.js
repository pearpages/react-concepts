// Three different ways of creating a component

import React from 'react';
import Composed from './components/composed';
import TextAreaWithEvents from './components/textarea-with-events';

class App extends React.Component {

    render() {
        return (
            <div>
                <Composed cat={5} txt="this is the prop text" txt3="hellooooo"></Composed>
                <TextAreaWithEvents></TextAreaWithEvents>
            </div>
        )
    }
}

export default App;