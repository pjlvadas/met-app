App.Views.UserLogin = Backbone.View.extend({
  initialize: function() {
    console.log('login view');
    this.template = Handlebars.compile($('#login-template').html());
    this.render();
  },

  render: function() {
    var renderedTemplate = this.template();
    this.$el.html(renderedTemplate);
    $('#main').append(this.$el);
  },

  events: {
    'keypress input[name="username"]': 'login',
    'click button': 'createProfile'
  },

  login: function(e) {
    if (e.keyCode === 13) {
      var username = $('input[name="username"]').val();
      var currentUser = App.usersCollection.findWhere({username: username});
      var id = currentUser.id;
      sessionStorage.setItem("currentUser", id);
      App.router.navigate('users/' + id, {trigger: true});
    }
  },

  createProfile: function() {
    console.log('createAccount event triggered');
    App.router.navigate('create_profile', {trigger: true});
  }
});
