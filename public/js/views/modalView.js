App.Views.ArtworkModal = Backbone.View.extend({
	el: "#artwork-modal",

	initialize: function() {
		console.log("new MODAL VIEW created");
		this.template = Handlebars.compile($("#modal-view-template").html());
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	events: {
		'click #close': 'hideModal'
	},

	showModal: function() {
		this.$el.show();
	},

	hideModal: function() {
		this.$el.hide();
	}
});