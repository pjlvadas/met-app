App.Views.EditUser = Backbone.View.extend({
	//tagNAme:,

	//className:,

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
		console.log($('input[name="name"]').val());
		if (this.$('input[name="name"]').val()) {
			var data = {
				name: this.$('input[name="name"]').val(),
				username: this.$('input[name="username"]').val(),
				password: this.$('input[name="password"]').val(),
				bio: this.$('input[name="bio"]').val(),
				avatar: this.$('input[name="avatar"]').val(),
			}
			console.log(data);
			var userModel = App.usersCollection.get(this.model.id);
			userModel.save(data);
			//App.usersCollection.get(this.model.id).save(data);
		}
	},

	deleteUser: function() {
		this.model.destroy();
	}
});
