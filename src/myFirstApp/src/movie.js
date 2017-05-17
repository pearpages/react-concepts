import React from 'react';
import { Link } from 'react-router'
const { string } = React.PropTypes;

Movie.propTypes = {
    Title: string.isRequired,
    Year: string.isRequired,
    imdbID: string.isRequired,
    Poster: string.isRequired
};

export default function Movie(props) {

    const { Title, Year, imdbID, Poster } = props;
    return <div className="movie-card">
        <h4>
            <Link to={'/details/' + imdbID}>{Title} <span>(Year: {Year})</span></Link>
        </h4>
        <p>imdbID: {imdbID}</p>
        <img src={Poster} alt={Title} />
    </div>;

}
