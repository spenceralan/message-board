import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  user: DS.attr(),
  date: DS.attr(),
  notes: DS.attr(),
  questoins: DS.hasMany('question', {async: true})
});
