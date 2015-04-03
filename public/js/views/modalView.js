App.Views.ArtworkModal = Backbone.View.extend({

	initialize: function() {
		console.log("new MODAL VIEW created");
		this.template = Handlebars.compile($("#artwork-modal-template").html());
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#artwork-modal').append(this.$el);
	},

	events: {
		'click #close': 'hideModal'
	},

	hideModal: function() {
		console.log('click event triggered');
		this.$el.hide();
	}
});
