import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
import Poll from './Poll';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <div>
            <Poll match={{params: {id: 'loxhs1bqm25b708cmbf3g'}}}/>
            <AddPoll />
            <Dashboard />
            <Leaderboard />
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
