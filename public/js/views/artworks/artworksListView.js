App.Views.ArtworksListView = Backbone.View.extend({

	el: "#main",

	initialize: function() {
		console.log('new ARTWORK LIST VIEW');
		// this.listenTo(this.collection, 'reset', this.render);
		// this.listenTo(this.collection, 'add', this.renderArtwork);
		this.render();
	},

	render: function() {
		this.$el.empty();
		this.collection.each(this.renderArtwork, this);
	},

	renderArtwork: function(artworkModel) {
		new App.Views.Artwork({ model: artworkModel})
	}

});
