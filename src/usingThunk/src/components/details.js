import React from 'react'
import MovieCard from './movie-card'
import {connect} from 'react-redux'
import {getOMDBDetails} from '../redux/actionCreators'

class Details extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     disabled: false
        // };

        this.updateMovie = this.updateMovie.bind(this);
        this.getMovie = this.getMovie.bind(this);
    }

    updateMovie() {
        // this.setState({disabled: true});
        this.props.dispatch(getOMDBDetails(this.props.movie.imdbID));
    }

    getMovie() {
        let aux;
        if(!this.props.omdbData || this.props.omdbData === {}) {
            aux = this.props.movie;
        } else {
            aux = this.props.omdbData;
        }
        return aux;
    }

    render () {
        return (<div>
            <button onClick={this.updateMovie} >Refresh from Server</button>
            <MovieCard
                movie={this.getMovie()}
            />
        </div>);
    }

}

function mapStateToProps(state,ownProps) {
    const omdbData = state.omdbData[ownProps.movie.imdb] ? state.omdbData[ownProps.show.imdb] : {};
    return omdbData;
}

export default connect(mapStateToProps)(Details);