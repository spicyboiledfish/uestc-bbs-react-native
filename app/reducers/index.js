import { combineReducers } from 'redux';
import user from './user';
import forumList from './forumList';
import topicList from './topic/topicList';
import topicItem from './topic/topicItem';
import comment from './topic/comment';

module.exports = combineReducers({
  forumList,
  topicList,

  user,
  topicItem,
  comment
});
