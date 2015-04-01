App.Views.UsersListView = Backbone.View.extend({

	tagName: 'section',

	className: 'users',

	initialize: function() {
		console.log('new USERS LIST VIEW created');
		this.render();
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.render);
	},

	render: function() {
		this.collection.each(this.renderUser, this);
	},

	renderUser: function(userModel) {
		this.$el.prepend(new App.View.User({ model: userModel }).$el);
	}
});