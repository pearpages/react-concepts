import React from 'react';
import topics from '../data/topics';
import {
  Route,
  Link
} from 'react-router-dom';
import Topic from './Topic';

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      {topics.map(({ name, id }) => (
        <li key={id}>
          <Link to={`${match.url}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>

    <hr/>

    <Route path={`${match.path}/:topicId`} component={Topic} />
  </div>
);

export default Topics;