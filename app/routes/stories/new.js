import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('story');
  },

  actions: {
    saveStory(newStory) {
      newStory.save().then(() => this.transitionTo('stories'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
