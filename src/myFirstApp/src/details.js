import React from 'react'
const p = React.PropTypes;

Details.propTypes = {
    movie: p.shape({
        Title: p.string,
        Year: p.string,
        Poster: p.string,
        Plot: p.string,
        Actors: p.string
    })
};

export default function Details(props) {

    const { Title, Year, Poster, Plot, Actors } = props.movie;
    return (<div>
        <h2>{Title} <span>(Year: {Year})</span></h2>
        <p>{Actors}</p>
        <p>{Plot}</p>
        <img src={Poster} alt={Title} />
    </div>);

}