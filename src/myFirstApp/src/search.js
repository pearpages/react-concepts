import React from 'react';
import {Search as movies} from '../assets/movies.json';
import Movie from './movie';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'this is the default string'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    getMovies() {
        return movies.filter(function filter(movie) {
            // return movie.Title.match( new RegExp(".*"+this.state.searchTerm+".*","gi"));
            return movie.Title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) > 0;
        }.bind(this));
    }

    render() {
        return (
            <div className="search">
                <h1>Search</h1>
                <div>
                    Filter: <input onChange={this.handleChange} value={this.state.searchTerm} type="text" placeholder="Filter"/>
                </div>
                {this.getMovies().map(function (movie) {
                    return (<Movie key={movie.imdbID} {...movie} />);
                })}
            </div>
        );
    }
}

