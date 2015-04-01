App.Collection.Users = Backbone.Collection.extend({

	initalize: function(){
		console.log('new USERS COLLECTION created');
	},

	url: '/users', 

	model: App.Models.User
});