# React Router

## Typical React App

* Components
* Styles
* Logic
* State

## Static Routing vs Dynamic Routing (React Router v4)

### Static Routing

```js
// routes.js

const routes = (
  <Router>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='playerOne' component={Prompt} />
      <Route path='playerTwo/:playerOne' component={Prompt} />
      <Route path='battle' component={ConfirmBattle} />
      <Route path='results' component={Results} />
      // OnEnter is recreating componentDidMount
      <Route onEnter={checkAuth} path='dashboard' component={Dashboard} />
    </Route>
  </Router>
);

export default routes
```

### Dynamic Routing (React Router v4)

* Routing that takes place as your app is rendering.
* Everyting is a component.
