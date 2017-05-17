import { Search as movies } from '../assets/movies.json';

export function filterMovies(pattern) {
    return movies.filter(function filter(movie) {
        // @learn
        // return movie.Title.match( new RegExp(".*"+pattern+".*","gi"));
        if (pattern === '') return true;
        return (movie.Title.toUpperCase()+movie.imdbID.toUpperCase()).indexOf(pattern.toUpperCase()) > -1;
    });
}

export function searchMovies(pattern) {
    return movies.filter(function filter(movie) {
        // @learn
        // return movie.Title.match( new RegExp(".*"+pattern+".*","gi"));
        if (pattern === '') return false;
        return (movie.Title.toUpperCase()+movie.imdbID.toUpperCase()).indexOf(pattern.toUpperCase()) > -1;
    });
}

export function getMovie(id) {
    return movies.find(function filter (movie) {
        return movie.imdbID === id;
    });
}