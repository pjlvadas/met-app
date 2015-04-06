App.Views.NewComment = Backbone.View.extend({

	initialize: function() {
		this.template = Handlebars.compile($("#new-comment-template").html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		this.$el.appendTo($('#new-comment-container'));
	},

	events: {
		'click button': 'createComment'
	},

	createComment: function() {
		console.log('create comment event triggered');
		var date = new Date();
		var modelId = this.model.id
		var userId = parseInt(sessionStorage.getItem('currentUser'));
		var author = App.usersCollection.get(userId).get('username');
		dateString = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
		var data = {
				title: $('input[name="title"]').val(),
				content: $('textarea[name="content"]').val(),
				date: dateString,
				author: author
				}
		$.ajax({
			url: '/artworks/' + modelId + '/comments',
			method: 'POST',
			data: data
		}).done(function() {
			App.router.navigate('my_gallery/'+ modelId, {trigger: true});
		});
	}
});
