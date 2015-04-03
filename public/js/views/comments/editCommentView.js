App.Views.EditUser = Backbone.View.extend({
	//tagName:,

	className: "comment",

	initialize: function() {
		this.template = Handlebars.compile($('#edit-comment-template').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	events: {
		"click .edit": "editComment",
		"click .delete": "deleteComment"
	},

	editComment: function() {
		if (this.$(".comment").val()) {
			var data = {
				title: this.$('.title').val(),
				content: this.$('.content').val(),
				date: this.$('.date').val()
				// avatar:
			}
			App.Comments.get(this.model.id).save(data);
		}
	},

	deleteComment: function() {
		this.model.destroy();
	}
	
});