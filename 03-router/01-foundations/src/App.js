import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => {

  return (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)};

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Route path='/topics/:topicId' component={Topic} />
      <Route path={match.url} render={() => (
        <h3>Please select a topic</h3>
      )} />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;