App.Views.User = Backbone.View.extend({

	tagName: 'aside',

	className: 'user',

	initialize: function() {
		console.log('new USER VIEW created');
		this.userViewTemplate = Handlebars.compile($("#user-view-template").html());
		this.renderView();
	},

	renderView: function() {
		this.$el.html(this.userViewTemplate(this.model.toJSON()));
	},

	events: {
		"click .edit": "showEditView"
	},

	showEditView: function() {
		$('#main').html(new App.Views.EditUser({model: user}).$el);
	}

})