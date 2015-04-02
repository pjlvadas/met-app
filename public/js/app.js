var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.usersCollection = new App.Collections.Users;
	App.usersCollectionView = new App.Views.UsersListView({ collection: App.usersCollection });
	App.artworkCollection = new App.Collections.Artworks;
	App.artworksCollectionView = new App.Views.ArtworksListView({ collection: App.artworkCollection });
	App.artworkModalView = new App.Views.ArtworkModal;
});
