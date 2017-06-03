import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        content: this.get('content') ? this.get('content') : "",
        username: this.get('username') ? this.get('username') : "",
        date: this.get('date') ? this.get('date') : "",
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('content', '');
      this.set('username', '');
      this.set('date', '');
    }
  }
});
