import React from 'react';

var dom = React.DOM;

var MyTitle = React.createClass({
    render: function () {
        return (
            dom.div(null,
                dom.h1({style: {color: this.props.color, fontWeight: 'bold'}}, this.props.title)
            )
        );
    }
});

export default MyTitle;