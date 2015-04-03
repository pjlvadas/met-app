App.Views.CommentsListView = Backbone.View.extend({

	initialize: function() {
		console.log('new COMMENTS LIST VIEW created');
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.renderComment);
	},

	render: function() {
		this.collection.each(this.renderComment, this);
	},

	renderComment: function(commentModel) {
		new App.Views.Comment({model: commentModel});
	}
});
