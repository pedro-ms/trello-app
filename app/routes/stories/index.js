import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },

  actions: {
    deleteStory(story) {
      let confirmation = confirm('Are you sure?');
      let hasTask = this.controller.get('model.story.tasks.length()');
      console.log(hasTask)
      if (confirmation) {

        story.destroyRecord();
      }
    }
  }
});
