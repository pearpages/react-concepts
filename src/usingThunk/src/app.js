import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Link } from 'react-router';
import Landing from './components/landing';
import Search from './components/search';
import {filterMovies,searchMovies,getMovie} from './data/movies';
import Details from './components/details';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.scss';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Provider store={store} >
                <div className="app">
                    <h1><Link to={'/'}>Svideo</Link></h1>
                    {/* @learn */}
                    <Match
                        exactly
                        pattern="/"
                        component={Landing}
                        />
                    <Match
                        pattern="/search"
                        component={Search}
                        />
                    <Match
                        pattern="/details/:id"
                        component={(props) => <Details movie={getMovie(props.params.id)} {...props} />}
                        />
                </div>
                </Provider>
            </BrowserRouter>
        );
    }
};

render(<App />, document.getElementById('app'));