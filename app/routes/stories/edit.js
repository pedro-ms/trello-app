import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('story', params.story_id);
  },

  actions: {
    saveStory(editStory) {
      let dueDate = new Date(editStory.get('dueDate'));

      editStory.set('dueDate', dueDate);
      editStory.save().then(() => this.transitionTo('stories'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
