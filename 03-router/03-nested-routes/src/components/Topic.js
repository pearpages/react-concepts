import React from 'react';
import { Route, Link } from 'react-router-dom';
import topics from '../data/topics';
import Resource from './Resource';

const Topic = ({match}) => {
  const topic = topics.find(topic => topic.id === match.params.topicId);

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>

      <hr/>

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
)};

export default Topic;