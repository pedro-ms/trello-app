import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      task: this.store.findRecord('task', params.task_id),
      stories: this.store.findAll('story')
    })
  },

  actions: {
    saveTask(newTask) {
      let storyId = this.controller.get('storyId');
      let story = this.get('store').peekRecord('story', storyId);

      newTask.set('story', story);
      story.get('tasks').pushObject(newTask);
      newTask.save().then(function () {
        story.save();
      }).then(() => this.transitionTo('tasks'));
    },
  }
});
