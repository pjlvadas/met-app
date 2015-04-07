App.Views.NewUser = Backbone.View.extend({

	className: 'new-user',

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
				bio: $('textarea').val(),
				avatar: $('input[name="image"]').val()
			};
			$.ajax({
				url: '/users',
				method: 'POST',
				data: data
			})
			.done(function(newUser) {
				App.router.navigate('users/'+ newUser.id, {trigger:true});
			});

		}
});
