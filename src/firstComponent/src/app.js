import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './my-title';

var dom = React.DOM;

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            dom.div(null,
                MyTitleFactory({title: 'this is a message 1', color: 'peru'}),
                MyTitleFactory({title: 'this is a message 2', color: 'mediumaquamarine'}),
                MyTitleFactory({title: 'this is a message 3', color: 'rebeccapurple'}),
                MyTitleFactory({title: 'this is a message 4', color: 'darkvioletred'})
            )
        );
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));