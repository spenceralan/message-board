import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          console.log(key);
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo(`question-page`, question);
    }
  }
});
