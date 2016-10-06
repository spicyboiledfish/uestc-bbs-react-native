import { Navigator } from 'react-native';
import Home from './containers/Home';
import ForumList from './containers/ForumList';
import TopicDetail from './containers/TopicDetail';
import ForumDetail from './containers/ForumDetail';

let _navigator = null;

class Router {
  constructor(navigator) {
    _navigator = navigator;
  }

  _navigateTo(route, isReplace) {
    let currentRoute = this.getCurrentRoute();
    if (route.id !== currentRoute.id) {
      if (isReplace) {
        _navigator.replace(route);
        return;
      }

      _navigator.push(route);
    }
  }

  getCurrentRoute() {
    let routeList = _navigator.getCurrentRoutes();
    let currentRoute = routeList[routeList.length - 1];
    return currentRoute;
  }

  isCurrentRoute(routeId) {
    return routeId === this.getCurrentRoute().id;
  }

  pop() {
    _navigator.pop();
  }

  toHome() {
    this._navigateTo({
      id: 'home',
      title: '最新',
      component: Home
    }, true);
  }

  toForumList() {
    this._navigateTo({
      id: 'forumList',
      title: '版块',
      component: ForumList
    }, true);
  }

  toTopic(topic) {
    this._navigateTo({
      id: 'topicDetail',
      title: topic.board_name,
      component: TopicDetail,
      passProps: topic
    });
  }

  toForum(forum) {
    this._navigateTo({
      /**
      * we should use `forum.board_id` instead of literal text `forumDetail`
      * as id otherwise we can't transition to sub forum from top torum.
      */
      id: forum.board_id,
      title: forum.board_name,
      component: ForumDetail,
      passProps: forum
    });
  }
}

module.exports = Router;