App.Views.Comment = Backbone.View.extend({

	initialize: function() {
		console.log('new COMMENT VIEW created');
		this.template = Handlebars.compile($("#comment-view-template").html());
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('.comment-container').append(this.$el);
	},

	events: {
		"click .edit": "showEditView"
	},

	showEditView: function() {
		$('#main').html(new App.Views.EditComment({model: comment}).$el);
	}

});
