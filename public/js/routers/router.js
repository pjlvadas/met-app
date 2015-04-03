App.router = Backbone.Router.extend({
  initialize: function() {
    console.log('router ready');
  },

  routes: {
    '/user/:id': 'user'
  },

  user: function(id) {
    var user = App.usersCollection.get(id);
    new App.Views.User({model: user});
  }
});
