import React from 'react'
import MovieCard from './movie-card'
import {getFromOrigin} from './movies'

export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: '',
            disabled: false
        };

        this.updateMovie = this.updateMovie.bind(this);
        this.getMovie = this.getMovie.bind(this);
    }

    updateMovie() {
        this.setState({disabled: true});
        getFromOrigin(this.props.params.id)
            .then(response => response.text())
            .then((text) => this.setState({disabled: false,details: JSON.parse(text)}) );
    }

    getMovie() {
        if(this.state.details === '') {
            return this.props.movie;
        } else {
            return this.state.details;
        }
    }

    render () {
        return (<div>
            <button disabled={this.state.disabled} onClick={this.updateMovie} >Refresh from Server</button>
            <MovieCard
                movie={this.getMovie()}
            />
        </div>);
    }

}