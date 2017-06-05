import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      let params = {
        content: this.get("content") ? this.get("content") : "",
        notes: this.get("notes") ? this.get("notes") : "",
        username: this.get("username") ? this.get("username") : "",
        date: this.get("date") ? this.get("date") : "",
      }
      this.sendAction('saveQuestion', params);
    }
  }
});
