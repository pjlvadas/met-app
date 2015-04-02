App.Views.NewComment = Backbone.View.extend({

	tagName: "section",

	className: "new-comment",

	initialize: function() {
		this.template = Handlebars.compile($("#new-comment-template").html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
	},

	events: {
		'click .create': 'createComment'
	},

	createComment: function() {
		if (this.$el('.comment').val()) {
			var data = {
				title: this.$('.title').val(),
				content: this.$('.content').val(),
				date: this.$('.date').val(),
				// avatar:
			}
			App.comments.create(data);
		}
	}
});