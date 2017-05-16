import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Match } from 'react-router';
import Landing from './landing';
import Search from './search';
import './app.scss';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="app">
                    <Match exactly pattern="/" component={Landing} />
                    <Match pattern="/search" component={Search} />
                </div>
            </HashRouter>
        );
    }
};

render(<App />, document.getElementById('app'));