require('app/routes/users-route');
require('app/routes/index-route');

App.Router.map(function() {
  this.resource('users', function() {
    this.resource('user', { path: ':user_id' });
  });
  this.resource('repos');
  this.resource('about');
});
