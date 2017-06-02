import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  username: DS.attr(),
  date: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
