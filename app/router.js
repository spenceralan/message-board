import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new-question');
  this.route('question-page', {path: '/question/:question_id'});
  this.route('edit-question');
});

export default Router;
