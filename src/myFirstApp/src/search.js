import React from 'react';
import Filter from './filter';

export default function Search(props) {

    return (
        <div className="search">
            <h2>Search</h2>
            <Filter
                onChange={props.onChange}
                searchTerm={props.searchTerm}
                movies={props.movies}
                label="Filter"
            />
        </div>
    );
}
