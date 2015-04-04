App.Views.ArtworkModal = Backbone.View.extend({

	initialize: function() {
		console.log("new MODAL VIEW created");
		this.template = Handlebars.compile($("#artwork-modal-template").html());
		this.render();
	},

	render: function() {
		console.log(this.model)
		var artData = {};
		artData.artist = this.model.get('primaryArtistNameOnly');
		artData.img_url = this.model.get('currentImage').imageUrl;
		artData.date = this.model.get('dateText');
		artData.gallery = this.model.get('gallery');
		this.model.set(artData);
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
		App.router.navigate(App.router.preModalRoute, {trigger:true});
	}
});
