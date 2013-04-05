require('app/models/repository');

App.User = DS.Model.extend({
  login: DS.attr('string'),
  name: DS.attr('string'),
  repositories: DS.hasMany('App.Repository')
});

App.User.FIXTURES = [];
