require('vendor/javascripts/jquery-1.9.1');
require('vendor/javascripts/bootstrap.min');
require('vendor/javascripts/handlebars-1.0.0-rc.3');
require('vendor/javascripts/ember-1.0.0-rc.2');
require('vendor/javascripts/ember-data');

require('build/templates');

App = Ember.Application.create();

require('app/models/store');

require('app/models/user');

require('app/routes/router');
