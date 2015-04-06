App.Views.UsersListView = Backbone.View.extend({

	initialize: function() {
		console.log('new USERS LIST VIEW created');
		this.render();
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.renderUser);
	},

	render: function() {
		this.collection.each(this.renderUser, this);
	},

	renderUser: function(userModel) {
		var userView = new App.Views.User({model: userModel});
	}
});
