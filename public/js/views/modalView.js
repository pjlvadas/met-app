App.Views.ArtworkModal = Backbone.View.extend({
	el: "#artwork-modal",

	initialize: function() {
		console.log("new MODAL VIEW created");
		this.template = Handlebars.compile($("#artwork-modal-template").html());
		this.render();
		// this.fetchAndRenderComments();
	},

	render: function() {
		// debugger;
		this.$el.html(this.template(this.model.toJSON()));
		//console.log(this.model);
	},

	fetchAndRenderComments: function() {
		// debugger;
		this.model.fetch({
			success: this.renderComments.bind(this)
		});
	},

	renderComments: function() {
		this.$('.modal-view').html((new App.Views.Comments({ 
		  collection: this.model.artComments 
		})).$el);
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
