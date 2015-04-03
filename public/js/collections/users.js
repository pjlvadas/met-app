App.Collections.Users = Backbone.Collection.extend({

	initialize: function(){
		console.log('new USERS COLLECTION created');
	},

	url: '/users',

	model: App.Models.User
});
