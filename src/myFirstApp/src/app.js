import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import Landing from './landing';
import Search from './search';
import './app.scss';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Match exactly pattern="/" component={Landing} />
                    <Match pattern="/search" component={Search} />
                </div>
            </BrowserRouter>
        );
    }
};

render(<App />, document.getElementById('app'));