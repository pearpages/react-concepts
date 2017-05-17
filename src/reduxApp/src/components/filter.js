import React from 'react';
import Movie from './movie';
const p = React.PropTypes;

Filter.propTypes = {
    movies: p.arrayOf(
        p.shape({
            Title: p.string.isRequired,
            Year: p.string.isRequired,
            imdbID: p.string.isRequired,
            Poster: p.string.isRequired
        })
    )
};
export default function Filter(props) {

    return (<div className="filter">
        <div>
            {props.label}: <input
                autoFocus={true}
                onChange={props.onChange}
                value={props.searchTerm}
                type="text"
                placeholder={props.label}
            />
        </div>
        {props.movies.map(function (movie) {
            return (<Movie key={movie.imdbID} {...movie} />);
        })}
    </div>);

}