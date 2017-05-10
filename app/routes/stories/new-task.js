import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      task: this.store.createRecord('task'),
      story: this.store.findRecord('story', params.story_id )
    })
  },

  actions: {
    saveTask(newTask) {
      let story = this.controller.get('model.story');

      newTask.set('story', story);
      story.get('tasks').pushObject(newTask);
      newTask.save().then(function () {
        story.save();
      }).then(() => this.transitionTo('stories'));
    },

    willTransition() {
      let model = this.controller.get('model.task');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
