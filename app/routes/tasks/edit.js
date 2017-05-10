import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      task: this.store.findRecord('task', params.task_id),
      stories: this.store.findAll('story')
    })
  },

  actions: {
    saveTask(editTask) {
      let storyId = this.controller.get('storyId');
      let story = this.get('store').peekRecord('story', storyId);

      editTask.set('story', story);
      editTask.save().then(() => this.transitionTo('tasks'));
    }
  }
});
