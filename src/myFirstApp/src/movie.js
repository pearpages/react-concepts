import React from 'react';
const { string } = React.PropTypes;

export default function Movie(props) {

    const {Title,Year,imdbID,Poster} = props;
    return (<div className="movie-card">
        <h4>{Title} <span>(Year: {Year})</span></h4>
        <p>imdbID: {imdbID}</p>
        <img src={Poster} alt={Title} />
    </div>);

}

Movie.propTypes = {
    Title: string.isRequired,
    Year: string.isRequired,
    imdbID: string.isRequired,
    Poster: string.isRequired
}
