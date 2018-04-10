# Readme

```bash
yarn add react-router-dom
```

#### Redirect

```js
this.props.history.push('/');
```

#### Routes

```js
<Route path='/' exact component={Dashboard} />
<Route path='/leaderboard' component={Leaderboard} />
<Route path='/polls/:id' component={Poll} />
<Route path='/add' component={AddPoll} />
```

#### Links

```js
<Link to={`polls/${poll.id}`}>
  {poll.question}
</Link>
```

#### Navigation

```jsx
<nav className='nav'>
  <ul>
    <li>
      <NavLink to='/' exact activeClassName='active'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to='/leaderboard' exact activeClassName='active'>
        Leaderboard
      </NavLink>
    </li>
    <li>
      <NavLink to='/add' exact activeClassName='active'>
        Add Poll
      </NavLink>
    </li>
  </ul>
</nav>
```