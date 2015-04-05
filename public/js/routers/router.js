App.router = Backbone.Router.extend({
  initialize: function() {
    console.log('router ready');
  },

  routes: {
    '': 'homepage',
    'search': 'search',
    'search/:query': 'searchQuery',
    'login': 'login',
    'users/:id': 'user',
    'my_gallery/:id': 'galleryModal',
    'artwork/:id': 'artwork',
    'my_gallery/:id/add_comment': 'galleryComment',
    'create_profile': 'createProfile',
    'edit_profile/:id': 'editProfile'
  },

  user: function(id) {
    console.log('user router')
    App.usersCollection.fetch()
      .done(function() {
        var user = App.usersCollection.get(id);
        new App.Views.User({model: user});
      });
    //new App.Views.User({model: user});
  },

  search: function() {
    console.log('search route');
    new App.Views.NavigationView();
  },

  searchQuery: function(query) {
    console.log('search query route');
    $.ajax({
      url: 'http://scrapi.org/search/' + query,
      method: 'GET'
    }).done(function(data){
      for (var i = 0; i < 2; i++){
        var newModel = new App.Models.Artwork(data.collection.items[i]);
        new App.Views.ArtworksNavView({ model: newModel });
      }
    });
  },

  login: function() {
    console.log('login route');
    new App.Views.UserLogin();
  },

  galleryModal: function(id) {
    console.log('my_gallery route');
    App.artworkCollection
      .fetch()
      .done(function() {
        var galleryPiece = App.artworkCollection.get(id);
        new App.Views.GalleryModal({model: galleryPiece})
      });
  },

  galleryComment: function(id) {
    console.log('gallery comment route');
    App.artworkCollection
      .fetch()
      .done(function() {
        var galleryPiece = App.artworkCollection.get(id);
        new App.Views.GalleryModal({model: galleryPiece});
        new App.Views.NewComment({model: galleryPiece});
      })
  },

  artwork: function(id) {
    console.log('artwork_route');
    $.ajax({
      url: 'http://scrapi.org/object/' + id,
      method: 'GET'
    })
      .done(function(data) {
        var model = new App.Models.Artwork(data);
        new App.Views.ArtworkModal({model: model});
      });
    },

    createProfile: function() {
      console.log('create profile route');
      new App.Views.NewUser();
    },

    editProfile: function(id) {
      console.log('edit profile route');
      App.usersCollection
        .fetch()
        .done(function() {
          var userModel = App.usersCollection.get(id);
          new App.Views.EditUser({model: userModel});
        });
      }
});
