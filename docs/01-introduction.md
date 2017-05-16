# Introduction

+ Plain Basic Components
+ React Factories

## Plain Basic Components

React example without JSX and babel.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mastering REACT</title>
</head>
<body>
    <div id="app">React has not yet rendered</div>
    <script src="node_modules/react/dist/react.js"></script>
    <script src="node_modules/react-dom/dist/react-dom.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

```js
// app.js
var MyFirstComponent = React.createClass({
    render: function () {
        return (
            React.DOM.div(null,
                React.DOM.h1(null, 'This is my first component!')
            )
        );
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
```

```js
var dom = React.DOM;

var MyTitle = React.createClass({
    render: function () {
        return (
            dom.div(null,
                dom.h1(null, 'check out this component')
            )
        );
    }
});

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            dom.div(null,
                React.createElement(MyTitle),
                React.createElement(MyTitle),
                React.createElement(MyTitle),
                React.createElement(MyTitle)
            )
        );
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
```

## Factories

```js
var dom = React.DOM;

var MyTitle = React.createClass({
    render: function () {
        return (
            dom.div(null,
                dom.h1(null, 'check out this component')
            )
        );
    }
});

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            dom.div(null,
                MyTitleFactory(null),
                MyTitleFactory(null),
                MyTitleFactory(null),
                MyTitleFactory(null)
            )
        );
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
```

## Props

```js
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
```