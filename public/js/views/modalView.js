App.Views.ArtworkModal = Backbone.View.extend({

	initialize: function() {
		console.log("new MODAL VIEW created");
		this.template = Handlebars.compile($("#artwork-modal-template").html());
		this.render();
		// this.fetchAndRenderComments();
	},

	render: function() {
		console.log(this.model);
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#artwork-modal').append(this.$el);
		new App.Views.CommentsListView( {collection: this.model.comments} );
	},

	events: {
		'click button': 'hideModal'
	},

	hideModal: function() {
		console.log('click event triggered');
		this.$el.hide();
	}
});
