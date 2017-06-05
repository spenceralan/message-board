import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      let params = {
        content: this.get("content"),
        notes: this.get("notes"),
        username: this.get("username"),
        date: this.get("date"),
      }
      this.sendAction('updateQuestion', question, params);
    }
  }
});
