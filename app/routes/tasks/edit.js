import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('task', params.task_id);
  },

  actions: {
    saveTask(editTask) {
      let storyId = this.controller.get('storyId');
      let story = this.get('store').peekRecord('story', storyId);

      newTask.set('story', story);
      newTask.save().then(() => this.transitionTo('tasks'));
    }
  }
});
