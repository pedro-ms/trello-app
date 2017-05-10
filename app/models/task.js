import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  story_id: DS.belongsTo('story')
});
