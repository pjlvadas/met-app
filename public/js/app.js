var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.usersCollection = new App.Collections.Users;
	App.usersCollectionView = new App.Views.Users({ collection: App.usersCollection });
});