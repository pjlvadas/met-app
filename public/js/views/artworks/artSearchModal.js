App.Views.ArtworkModal = Backbone.View.extend({

	initialize: function() {
		console.log("new MODAL VIEW created");
		this.template = Handlebars.compile($("#artwork-modal-template").html());
		this.render();
	},

	render: function() {
		var metURL = 'http://metmuseum.org';
		var re = /^T/;
		//Constructs new Backbone model from data available in API response
		//Necessary to store the artwork in the database.
		var artData = {};
		artData.artist = this.model.get('primaryArtistNameOnly');
		artData.img_url = this.model.get('currentImage').imageUrl;
		artData.date = this.model.get('dateText').toString();
		re.test(this.model.get('galleryLink')) ?
			artData.gallery_url = this.model.get('galleryLink')
			: artData.gallery_url = metURL + this.model.get('url');
		artData.medium = this.model.get('medium');
		artData.title = this.model.get('title');
		var model = new App.Models.Artwork(artData);
		this.model = model;
		console.log(this.model);
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#artwork-modal').append(this.$el);
	},

	events: {
		'click button[name="close"]': 'hideModal',
		'click button[name="add"]': 'addGallery'
	},

	hideModal: function() {
		console.log('click event triggered');
		this.$el.hide();
		App.router.navigate(App.router.preModalRoute, {trigger:true});
	},

	addGallery: function() {
		console.log('add gallery event triggered');
		
	}
});
