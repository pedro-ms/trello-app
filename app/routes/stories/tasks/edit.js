import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('task', params.task_id);
  },

  actions: {
    saveTask(editTask) {
      let story = this.controller.get('model.story');
      let storyId = this.controller.get('model.story.id');

      editTask.set('story', story);
      editTask.save().then(() => this.transitionTo('stories.view', storyId));
    },
  }
});
