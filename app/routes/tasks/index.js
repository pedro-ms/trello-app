import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },

  actions: {
    deleteTask(task) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        task.destroyRecord();
      }
    }
  }
});
