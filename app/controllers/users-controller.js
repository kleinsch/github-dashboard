App.UsersController = Ember.ArrayController.extend({
  search: '',
  query: function() {
    var query = this.get('search');
    var url = 'https://api.github.com/legacy/user/search/';
    url += query;
    var me = this;
    $.getJSON(url,function(data){
      console.log(data);
      $(data.users).each(function(index,value) {
        if(index < 10) {
          var t = App.User.createRecord({
            id: value.id,
            login: value.login,
            name: value.name
          });
        }
      });
    });
  }
});
