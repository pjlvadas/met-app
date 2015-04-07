App.Views.EditUser = Backbone.View.extend({

	className: 'edit-user',

	initialize: function() {
		this.template = Handlebars.compile($('#edit-user-template').html());
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#main').append(this.$el);
	},

	events: {
		"click .edit": "editUser",
		"click .delete": "deleteUser"
	},

	editUser: function() {
		console.log('edit triggered');
		var data = {
				name: $('input[name="name"]').val(),
				username: $('input[name="username"]').val(),
				password: $('input[name="password"]').val(),
				bio: $('textarea[name="bio"]').val(),
				avatar: $('input[name="avatar"]').val(),
			}
			this.model.save(data);
			alert('Your profile is updated');
			var userId = this.model.id;
			App.router.navigate('users/' + userId, {trigger: true});
	},

	deleteUser: function() {
		console.log(this.model);
		alert('Your profile is destroyed');
		this.model.destroy();
		sessionStorage.setItem('currentUser', '');
		App.router.navigate('home', {trigger: true});
	}
});
