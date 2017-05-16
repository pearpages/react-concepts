import React from 'react';
import {Search as movies} from '../assets/movies.json';
import Movie from './movie';

export default class Search extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="search">
                <h1>Search page!!</h1>
                {movies.map(function (movie) {
                    return (<Movie key={movie.imdbID} {...movie} />);
                })}
            </div>
        );
    }
}

