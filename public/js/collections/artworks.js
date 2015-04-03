App.Collections.Artworks = Backbone.Collection.extend({

	initalize: function(){
		console.log('new ARTWORKS COLLECTION created');
	},

	url: '/artworks',

	model: App.Models.Artwork
});
