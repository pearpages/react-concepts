import React from 'react';
import Movie from './movie';
const p = React.PropTypes;

Search.propTypes = {
    movies: p.arrayOf(
        p.shape({
            Title: p.string.isRequired,
            Year: p.string.isRequired,
            imdbID: p.string.isRequired,
            Poster: p.string.isRequired
        })
    )
};

export default function Search(props) {

    return (
        <div className="search">
            <h2>Search</h2>
            <div>
                Filter: <input
                    autoFocus={true}
                    onChange={props.onChange}
                    value={props.searchTerm}
                    type="text"
                    placeholder="Filter"
                />
            </div>
            {props.movies.map(function (movie) {
                return (<Movie key={movie.imdbID} {...movie} />);
            })}
        </div>
    );
}
