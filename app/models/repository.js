App.Repository = DS.Model.extend({
  name: DS.attr('string')
});

App.Repository.FIXTURES = [{
  id: 1,
  name: "Flake Escape"
}];
