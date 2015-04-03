App.Models.User = Backbone.Model.extend({

	urlRoot: '/users',

	initialize: function () {
		console.log('new USER MODEL created');
	},

	parse: function(data) {
		if (data.artworks) {
			this.gallery = new App.Collections.Artworks();
			this.gallery.add(data.artworks);
		}
		return data;
	}
});
