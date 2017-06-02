import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  user: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
