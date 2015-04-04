App.Views.NewUser = Backbone.View.extend({

	initialize: function() {
		this.template = Handlebars.compile($('#new-user-template').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		$('#main').append(this.$el);
	},

	events: {
		'click button': 'createUser'
	},

	createUser: function() {
			var data = {
				name: $('input[name="name"]').val(),
				username: $('input[name="username"]').val(),
				password: $('input[name="password"]').val(),
				bio: $('input[name="bio"]').val(),
				avatar: $('input[name="image"]').val()
			}
			App.usersCollection.create(data);
		}
});
