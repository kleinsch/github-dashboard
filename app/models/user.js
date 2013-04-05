require('app/models/repository');

App.User = DS.Model.extend({
  login: DS.attr('string'),
  name: DS.attr('string'),
  gravatar_id: DS.attr('string'),
  public_repo_count: DS.attr('number'),
  followers_count: DS.attr('number'),

  repositories: DS.hasMany('App.Repository'),

  displayName: function() {
    return this.get('name') ? this.get('name') : this.get('login');
  }.property('name', 'login'),

  gravatarURL: function() {
    return "http://www.gravatar.com/avatar/%@".fmt(this.get('gravatar_id'));
  }.property('gravatar_id')
});

App.User.FIXTURES = [];
