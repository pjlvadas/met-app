App.Views.User = Backbone.View.extend({

	initialize: function() {
		console.log('new USER VIEW created');
		this.userViewTemplate = Handlebars.compile($("#user-view-template").html());
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.userViewTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#main').append(this.$el);
		new App.Views.Gallery({collection: this.model.gallery});
	},

	events: {
		'click button[name="edit"]': "showEditView",
	},

	showEditView: function() {
		console.log('edit view triggerd');
		App.router.navigate('edit_profile/' + this.model.id, {trigger: true});
	}
});
