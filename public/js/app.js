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
	App.commentsCollection = new App.Collections.Comments;
	App.commmentsCollectionView = new App.Views.CommentsListView({ collection: App.commentsCollection });
	App.artworkModalView = new App.Views.ArtworkModal;
	//App.navigateView = new App.Views.NavigationView;
	App.artworksSearchView = new App.Views.ArtworksNavView;
<<<<<<< HEAD
	//App.artworkModalView = new App.Views.ArtworkModal;
	//App.navigateView = new App.Views.NavigationView;
=======
>>>>>>> f445af4d0010a24996566333e665aa1c6c818ab2
	App.usersCollection.fetch();
	App.artworkCollection.fetch();
});
