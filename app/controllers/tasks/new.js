import Ember from 'ember';

export default Ember.Controller.extend({
  storyId: null,

  actions: {
    selectStory(storyId) {
      this.set('storyId', storyId);
    }
  }
});
