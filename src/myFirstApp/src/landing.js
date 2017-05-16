import React from 'react';

export default Landing;

class Landing extends React.Component {

    render() {
        return (
            <div className="landing">
                <h1>svideo</h1>
                <input type="text" placeholder="search" /> <a className="button">or Browse All</a>
            </div>
        );
    }
}
