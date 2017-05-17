import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Link } from 'react-router';
import Landing from './landing';
import Search from './search';
import {filterMovies,searchMovies,getMovie} from './movies';
import Details from './details';
import './app.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            landingSearch: '',
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.landingSearchChange = this.landingSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    landingSearchChange(event) {
        this.setState({landingSearch: event.target.value});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <h1><Link to={'/'}>Svideo</Link></h1>
                    {/* @learn */}
                    <Match
                        exactly
                        pattern="/"
                        component={(props) => <Landing
                            searchTerm={this.state.landingSearch}
                            onChange={this.landingSearchChange}
                            movies={searchMovies(this.state.landingSearch)}
                            {...props}
                            />
                            }
                        />
                    <Match
                        pattern="/search"
                        component={(props) => <Search
                            searchTerm={this.state.searchTerm}
                            onChange={this.handleSearchChange}
                            movies={filterMovies(this.state.searchTerm)}
                            {...props}
                            />
                            }
                        />
                    <Match
                        pattern="/details/:id"
                        component={(props) => <Details movie={getMovie(props.params.id)} {...props} />}
                        />
                </div>
            </BrowserRouter>
        );
    }
};

render(<App />, document.getElementById('app'));