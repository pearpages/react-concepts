// Three different ways of creating a component

import React from 'react';

class App extends React.Component {
    render() {
        // 1st way
        return <h1 className="myclass">Hello World</h1> 
        // 2nd way
        // return React.createElement('h1', null, 'Hello World');
    }
}

// 3rd way
// const App = () => <h1>Hello World</h1>

export default App;