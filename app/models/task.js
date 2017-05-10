import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  story: DS.belongsTo('story'),

  isValidName: Ember.computed.notEmpty('name'),
  isValidStory: Ember.computed.notEmpty('story'),
  isValid: Ember.computed.and('isValidName', 'isValidStory')
});
