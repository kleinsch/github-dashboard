require('app/models/repository');

App.User = DS.Model.extend({
  login: DS.attr('string'),
  name: DS.attr('string'),
  repositories: DS.hasMany('App.Repository')
});

App.User.FIXTURES = [{
  id: 1,
  login: "kleinsch",
  name: "Nick Kleinschmidt",
  repositories: [1]
}, {
  id: 2,
  login: "wycats",
  name: "Yehuda Katz",
  repositories: []
}];
