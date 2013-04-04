require('vendor/javascripts/jquery-1.9.1');
require('vendor/javascripts/bootstrap.min');
require('vendor/javascripts/handlebars-1.0.0-rc.3');
require('vendor/javascripts/ember-1.0.0-rc.2');

App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
