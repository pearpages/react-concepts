# Pass props to a component renderd by a React Router

We use the prop **render** in order not the create the Component each time.

```js
{routes.map(({path, component: C, fetchInitialData }) => (
  <Route
    path={path}
    render={(props) => <C {...props} fetchInitialData={fetchInitialData} />}
  />
))}
```