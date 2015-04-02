App.Views.CommentsListView = Backbone.View.extend({

	tagName: 'section',

	className: 'comments',

	initialize: function() {
		console.log('new COMMENTS LIST VIEW created');
		this.render();
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.render);
	},

	render: function() {
		this.collection.each(this.renderComment, this);
	},

	renderComment: function(commentModel) {
		this.$el.prepend(new App.View.Comment({ model: commentModel }).$el);
	}
});