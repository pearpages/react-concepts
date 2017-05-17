import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Link } from 'react-router';
import Landing from './landing';
import Search from './search';
import {getMovies,getMovie} from './movies';
import Details from './details';
import './app.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <h1><Link to={'/'}>Svideo</Link></h1>
                    <Match exactly pattern="/" component={Landing} />
                    {/* @learn */}
                    <Match pattern="/search" component={(props) => <Search searchTerm={this.state.searchTerm} onChange={this.handleSearchChange} movies={getMovies(this.state.searchTerm)} {...props}/>} />
                    <Match pattern="/details/:id" component={(props) => <Details movie={getMovie(props.params.id)} {...props} />} />
                </div>
            </BrowserRouter>
        );
    }
};

render(<App />, document.getElementById('app'));