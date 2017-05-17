# The Component Lifecycle

Each component has several "lifecycle methods" that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

+ Mounting
+ Updating
+ Unmounting
+ Other APIs
+ Class Properties
+ Instance Properties

---

## Mounting

These methods are called when an instance of a component is being created and inserted into the DOM:

+ constructor()
+ componentWillMount()
+ render()
+ componentDidMount()

### constructor()

It is called before it is mounted. The constructor is the right place to initialize state.

### componentWillMount()

This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor() instead.

### render()

The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser.

### componentDidMount()

Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

---

## Updating

An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

+ componentWillReceiveProps()
+ shouldComponentUpdate()
+ componentWillUpdate()
+ render()
+ componentDidUpdate()

### componentWillReceiveProps()

componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.

### shouldComponentUpdate()

Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

### componentWillUpdate()

componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

Note that you cannot call this.setState() here. If you need to update state in response to a prop change, use componentWillReceiveProps() instead.

### render()

The same behavior as before.

### componentDidUpdate()

Use this as an opportunity to operate on the DOM when the component has been updated.

---

## Unmounting

This method is called when a component is being removed from the DOM:

+ componentWillUnmount()

---

## Other APIs

Each component also provides some other APIs:

+ setState()
+ forceUpdate()

### setState()

setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.

### foreUpdate()

If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

---

## Class Properties

+ defaultProps
+ displayName

### defaultProps

defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.

### displayName

The displayName string is used in debugging messages. JSX sets this value automatically; see JSX in Depth.

---

## Instance Properties

+ props
+ state

### props

this.props contains the props that were defined by the caller of this component. See Components and Props for an introduction to props.

### state

The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.

---