import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      task: this.store.createRecord('task'),
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

    willTransition() {
      let model = this.controller.get('model.task');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
