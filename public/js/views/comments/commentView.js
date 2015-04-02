App.Views.Comment = Backbone.View.extend({

	tagName: 'aside',

	className: 'comment',

	initialize: function() {
		console.log('new COMMENT VIEW created');
		this.commentViewTemplate = Handlebars.compile($("#comment-view-template").html());
		this.renderView();
	},

	renderView: function() {
		this.$el.html(this.commentViewTemplate(this.model.toJSON()));
		this.$el.appendTo($('#main'));
	},

	events: {
		"click .edit": "showEditView"
	},

	showEditView: function() {
		$('#main').html(new App.Views.EditComment({model: comment}).$el);
	}

});