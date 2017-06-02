import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuestion(params) {
      let newQuestion = this.store.createRecord('question', params);
      console.log(newQuestion)
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
