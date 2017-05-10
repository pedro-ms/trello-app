import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  due: DS.attr('date'),
  tasks: DS.hasMany('task')
});
