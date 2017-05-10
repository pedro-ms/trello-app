import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },
  
  actions: {
    deleteStory(story) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        story.destroyRecord();
      }
    }
  }
});
