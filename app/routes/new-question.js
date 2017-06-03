import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuestion(params) {
      let newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
