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
		dateString = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
		var data = {
				title: $('input[name="title"]').val(),
				content: $('input[name="content"]').val(),
				date: dateString
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
