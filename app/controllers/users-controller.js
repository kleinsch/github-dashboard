App.UsersController = Ember.ArrayController.extend({
  search: '',
  query: function() {
    var query = this.get('search');
    var url = 'https://api.github.com/legacy/user/search/';
    url += query;
    var me = this;
    $.getJSON(url,function(data){
      $(data.users).each(function(index,value) {
        if(index < 10) {
          var model = App.User.createRecord(value);
          model.set('loaded', true);
        }
      });
    });
  },

  filter: function() {
    var content = this.get('content');
  }.property('content')
});
