var App = {
	Models: {},
	Collections: {},
	Views: {},
	router: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.usersCollection = new App.Collections.Users();
	App.artworkCollection = new App.Collections.Artworks();
	//App.artworkModalView = new App.Views.ArtworkModal;
	App.commentsCollection = new App.Collections.Comments();
	App.usersCollection.fetch();
	App.artworkCollection.fetch();
	App.router = new App.router();
	$('#bar-search-button').on('click', function(){
		console.log('bar search button CLICKED');
		var newSearch = $('.nav-search').val();
		var query = $('#bar-search').val();
		App.router.navigate('search/' + query, {trigger: true});
	});
	Backbone.history.start();
});

