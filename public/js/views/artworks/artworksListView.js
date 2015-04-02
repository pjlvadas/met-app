
App.Views.ArtworksListView = Backbone.View.extend({


	tagName: 'section',

	className: 'artworks',

	initialize: function() {
		console.log('new ARTWORK LIST VIEW');
		this.render();
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.renderArtwork);
	},

	render: function() {
		this.collection.each(this.renderArtwork, this);
	},

	renderArtwork: function(artworkModel) {
		$('#main').prepend(new App.Views.Artwork({ model: artworkModel}).$el);
	}
});
