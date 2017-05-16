import React from 'react';
import {render} from 'react-dom';
import './app.scss';

const App = React.createClass({
    render () {
        return (
            <div className="app">
                <div className="landing">
                    <h1>svideo</h1>
                    <input type="text" placeholder="search" /> <a className="button">or Browse All</a>
                </div>
            </div>
        );
    }
});

render(<App />, document.getElementById('app'));