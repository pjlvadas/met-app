App.Collections.Users = Backbone.Collection.extend({

	initialize: function(){
		console.log('new USERS COLLECTION created');
	},

	url: '/users',

	parse: function(data) {
		console.log(data.name);
		this.gallery = new App.Collections.Artworks();
		this.gallery.add(data.artworks);
		return data;
	},

	model: App.Models.User
});
