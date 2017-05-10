import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stories', function() {
    this.route('index');
    this.route('new');
    this.route('edit', { path: '/:story_id/edit' });
    this.route('view', { path: '/:story_id/view' }, function() {
      this.route('edit-task');
    });
    this.route('new-task', { path: '/:story_id/new-task' });
  });
  this.route('tasks', function() {
    this.route('index');
    this.route('new');
    this.route('edit', { path: '/:task_id/edit' });
    this.route('view', { path: '/:task_id/view' });
  });
});

export default Router;
