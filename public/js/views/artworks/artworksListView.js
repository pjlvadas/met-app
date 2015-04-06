App.Views.ArtworksListView = Backbone.View.extend({

	el: "#main",

	initialize: function() {
		console.log('new ARTWORK LIST VIEW');
		this.render();
	},

	render: function() {
		this.collection.each(this.renderArtwork, this);
	},

	renderArtwork: function(artworkModel) {
		new App.Views.Artwork({ model: artworkModel })
	}

});
