App.Views.NewUser = Backbone.View.extend({

	tagName: "section",

	className: "new-user",

	initialize: function() {
		this.template = Handlebars.compile($('#new-user-template').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		$('#main').append(this.$el);
	},

	events: {
		'click .create': 'createUser'
	},

	createUser: function() {
		if (this.$('.name').val()) {
			var data = {
				name: this.$('.name').val(),
				username: this.$('.username').val(),
				password: this.$('.password').val(),
				bio: this.$('.bio').val(),
				image: this.$('.image').val()
			}
			App.users.create(data);
		}
	}

});
