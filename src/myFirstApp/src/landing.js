import React from 'react';
import { Link } from 'react-router';

export default class Landing extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="landing">
                <input type="text" placeholder="search" /> <Link to='/search' className="button">or Browse All</Link>
            </div>
        );
    }

}
