import React from 'react';

export default class Landing extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="landing">
                <h1>svideo</h1>
                <input type="text" placeholder="search" /> <a className="button">or Browse All</a>
            </div>
        );
    }

}
