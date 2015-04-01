App.Views.EditUser = Backbone.View.extend({
	//tagNAme:,

	//className:,

	initialize: function() {
		this.template = Handlebars.compile($('#edit-user-template').html());
		this.render();
	},

	render: function() {
		this.$el.htm(this.template(this.model.toJSON()));
	},

	events: {
		"click .edit": "editUser",
		"click .delete": "deleteUser"
	},

	editUser: function() {
		if (this.$(".user").val()) {
			var data = {
				name: this.$('.name').val(),
				username: this.$('.username').val(),
				password: this.$('.password').val(),
				bio: this.$('.bio').val(),
				image: this.$('.image').val(),
			}
			App.Users.get(this.model.id).save(data);
		}
	},

	deleteUser: function() {
		this.model.destroy();
	}
});