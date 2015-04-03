App.Models.Artwork = Backbone.Model.extend({
	urlRoot: '/artworks',

	initialize: function() {
		console.log('new ARTWORK MODEL created');
	},

	parse: function(data) {
		if (data.comments) {
		  this.artComments = new App.Collections.Comments();
		  this.artComments.add(data.comments);
		}
		return data;
	}
});