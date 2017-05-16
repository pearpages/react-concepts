import React from 'react';
import { Link } from 'react-router';

export default class Landing extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="landing">
                <h1>svideo</h1>
                <input type="text" placeholder="search" /> <Link to='/search' className="button">or Browse All</Link>
            </div>
        );
    }

}
