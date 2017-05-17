import React from 'react';
import Filter from './filter';
import {filterMovies} from '../data/movies'
import {setSearchTerm} from '../redux/actionCreators'
const string = React.PropTypes.string;
import {connect} from 'react-redux'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event) {
        this.props.dispatch(setSearchTerm(event.target.value));
    }

    render() {
        const props = this.props;
        return (
            <div className="search">
                <h2>Search</h2>
                <Filter
                    onChange={this.handleFilterChange}
                    searchTerm={props.searchTerm}
                    movies={filterMovies(props.searchTerm)}
                    label="Filter"
                />
            </div>
        );
    }
}

Search.propTypes = {
    searchTerm: string
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchTerm
    }
}

export default connect(mapStateToProps)(Search);