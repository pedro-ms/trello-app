import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      task: this.store.createRecord('task'),
      story: this.store.findRecord('story', params.story_id)
    })
  },

  actions: {
    saveTask(newTask) {
      let storyId = this.controller.get('model.story.id');
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
