App.router = Backbone.Router.extend({
  initialize: function() {
    console.log('router ready');
  },

  routes: {
    '': 'homepage',
    'home': 'homepage',
    'events': 'events',
    'login': 'login',
    'search/:query': 'searchQuery',
    'users/:id': 'user',
    'my_gallery/:id': 'galleryModal',
    'artwork/:id': 'artwork',
    'my_gallery/:id/add_comment': 'galleryComment',
    'create_profile': 'createProfile',
    'edit_profile/:id': 'editProfile'
  },

  user: function(id) {
    console.log('user route')
    $('#main').empty();
    $('#search-results').hide();
    $('#nytimes-events').hide();
    $('#home-page').hide();
    $('#main').show();
    App.usersCollection.fetch()
      .done(function() {
        var user = App.usersCollection.get(id);
        new App.Views.User({model: user});
      });
    //new App.Views.User({model: user});
  },

  homepage: function() {
    $('#home-page').hide();
    if (sessionStorage.getItem('currentUser')) {
      $('#main').empty();
      $('#search-resuts').hide();
      $('#nytimes-events').hide();
      var userId = sessionStorage.getItem('currentUser');
      App.router.navigate('users/' + userId, {trigger:true});
    }
    else {
      $('#main').hide();
      $('#nytimes-events').hide();
      $('#search-results').hide();
      $('#home-page').show();
    }
  },

  events: function() {
    console.log('events route');
    $('#main').hide();
    $('#search-results').hide();
    $('#home-page').hide();
    $('#nytimes-events').empty();
    $('#nytimes-events').show();
    $.ajax({
      url: '/ny_times_events?query="The Metropolitan Museum of Art"',
      method: 'GET'
    }).done(function(data) {
      data.results.forEach(function(event) {
        event.web_description = $(event.web_description).text();
        var model = new App.Models.NyTimes(event);
        new App.Views.NyTimes({model: model});
      });
    });
  },

  searchQuery: function(query) {
    console.log('search query route');
    $('#nytimes-events').hide();
    $('#main').hide();
    $('#search-results').empty();
    $('#search-results').show();
    $('#home-page').hide()
    var query = encodeURI(query);
    $.ajax({
      url: '/scrapi_search/' + query,
      method: 'GET'
    }).done(function(data){
      var collection = data.body.collection;
      for (var i = 0; i < 15; i++){
        var newModel = new App.Models.Artwork(collection.items[i]);
        new App.Views.ArtworksNavView({ model: newModel });
      }
    });
  },

  login: function() {
    console.log('login route');
    $('#main').empty();
    $('#main').show();
    $('#search-results').hide();
    $('#nytimes-events').hide();
    $('#home-page').hide();
    new App.Views.UserLogin();
  },

  galleryModal: function(id) {
    console.log('my_gallery route');
    $('#artwork-modal').empty();
    $('#artwork-modal').show();
    App.artworkCollection
      .fetch()
      .done(function() {
        var galleryPiece = App.artworkCollection.get(id);
        new App.Views.GalleryModal({model: galleryPiece})
      });
  },

  galleryComment: function(id) {
    console.log('gallery comment route');
    $('#artwork-modal').empty();
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
    $('#artwork-modal').empty();
    $('#artwork-modal').show();
    $.ajax({
      url: '/scrapi_object_search/' + id,
      method: 'GET'
    })
      .done(function(data) {
        var data = data.body;
        var model = new App.Models.Artwork(data);
        new App.Views.ArtworkModal({model: model});
      });
    },

  createProfile: function() {
    console.log('create profile route');
    $('#main').empty();
    $('#nytimes-events').hide();
    $('#search-results').hide();
    $('#home-page').hide();
    new App.Views.NewUser();
    },

  editProfile: function(id) {
    console.log('edit profile route');
    $('#main').empty();
    $('#search').hide();
    $('#home-page').hide();
    $('#search-results').hide();
    $('#nytimes-events').hide();
    App.usersCollection
      .fetch()
      .done(function() {
        var userModel = App.usersCollection.get(id);
        new App.Views.EditUser({model: userModel});
      });
    }
});
