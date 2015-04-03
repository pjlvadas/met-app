App.Views.User = Backbone.View.extend({

	// tagName: 'aside',

	// className: 'user',

	initialize: function() {
		console.log('new USER VIEW created');
		this.userViewTemplate = Handlebars.compile($("#user-view-template").html());
		this.renderView();
	},

	renderView: function() {
		console.log(this.model);
		var renderedTemplate = this.userViewTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#main').append(this.$el);
	},

	events: {
		'click input[name="edit"]': "showEditView",
		'click .my-gallery': "showModalView"
	},

	showEditView: function() {
		var editView = new App.Views.EditUser({model: this.model});
	},

	showModalView: function(e) {
		var artwork = this.model.get('artworks');
		var artworkId = $(e.currentTarget).data().id;
		var artworkModel = App.artworkCollection.get(artworkId);
		console.log(artworkModel);
		var modal = new App.Views.ArtworkModal({model: artworkModel});
		// App.artworkCollection.fetch()
		// 	.done(function(artworks) {
		// 		console.log(artworks);
		// 	});
		// var artwork = new App.Models.Artwork(this.)
	}
});
