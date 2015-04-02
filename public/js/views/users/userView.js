App.Views.User = Backbone.View.extend({

	// tagName: 'aside',

	// className: 'user',

	initialize: function() {
		console.log('new USER VIEW created');
		this.userViewTemplate = Handlebars.compile($("#user-view-template").html());
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.userViewTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#main').append(this.$el);
	},

	events: {
		'click input[name="edit"]': "showEditView"
	},

	showEditView: function() {
		var editView = new App.Views.EditUser({model: this.model});
	}
});
