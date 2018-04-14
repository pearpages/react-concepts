import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Settings from './Settings';
import Dashboard from './Dashboard';

const routes = [
  {
    path: '/settings',
    component: Settings,
    fetchInitialData: (id) => fetchSettings(id)
  },
  {
    path: '/dashboard',
    component: Dashboard,
    fetchInitialData: (id) => fetchDashboard(id)
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>

          <hr/>

          {routes.map(({path, component: C, fetchInitialData }) => (
            <Route
              key={path}
              path={path}
              render={(props) => <C {...props} fetchInitialData={fetchInitialData} />}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;

// the following functions are just mock data for the sake of the example

function fetchSettings(id) {
  return id;
}

function fetchDashboard(id) {
  return id;
}

function fetchInitialData() {}
