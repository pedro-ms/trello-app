import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    task: this.store.findRecord('task', params.task_id);
  },

  actions: {
    saveTask(editTask) {
      let story = this.controller.get('model.task.story');;

      editTask.set('story', story);
      story.get('tasks').pushObject(editTask);
      editTask.save().then(function () {
        story.save();
      }).then(() => this.transitionTo('tasks'));
    },
  }
});
