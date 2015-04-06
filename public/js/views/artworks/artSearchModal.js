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
		$('#artwork-modal').hide();
		App.router.navigate(App.router.preModalRoute, {trigger:true});
	},

	addGallery: function() {
		console.log('add gallery event triggered');
		var data = this.model.toJSON();
		var userId = sessionStorage.getItem('currentUser');

		var addArtwork = function(artwork) {
			var artworkId = artwork.id;
			$.ajax({
				url: '/users/' + userId + '/add_artwork',
				method: 'PUT',
				data: {artwork_id: artworkId}
			});
		};

		//Check if artwork is already in the collection. If not,
		//post to the database and add artwork. If so, just add artwork.

		var model = App.artworkCollection.findWhere(data);

		if(!model) {
			$.ajax({
				url: '/artworks',
				method: 'POST',
				data: data})
				.done(addArtwork)
					.done(function() {
						console.log('art added successfully');
					});
			}
		else {
			console.log('artwork in collection, adding tag')
			addArtwork(model);
		}

		// $.ajax({url: '/users/' + userId + 'add_artwork'})

	}
});
