import React from 'react';
import topics from '../data/topics';

const Topic = ({match}) => {
  const topic = topics.find(topic => topic.id === match.params.topicId);

  return (
  <h3>{topic.name}</h3>
)};

export default Topic;