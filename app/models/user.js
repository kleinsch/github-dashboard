require('app/models/repository');

App.User = DS.Model.extend({
  login: DS.attr('string'),
  name: DS.attr('string'),
  repositories: DS.hasMany('App.Repository'),

  displayName: function() {
    return this.get('name') ? this.get('name') : this.get('login');
  }.property('name', 'login')
});

App.User.FIXTURES = [];
