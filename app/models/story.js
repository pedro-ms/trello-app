import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  dueDate: DS.attr('date'),
  tasks: DS.hasMany('task')
});
