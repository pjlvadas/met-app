App.Views.ArtworksNavView = Backbone.View.extend({

	tagName: 'aside',

	className: 'artwork',

	initialize: function(){
		console.log('ARTWORKS NAV VIEW CREATED');
		this.artworkNavTemplate = Handlebars.compile($('#artwork-nav-view-template').html());
		this.renderNav();
	},

	renderNav: function(){
		// var renderedTemplate = this.artworkNavTemplate(this.model.toJSON());
		this.$el.html(this.artworkNavTemplate(this.model.toJSON()));
		this.$el.appendTo($('#main'));
	},

	events: {
		'click .search-view': 'showModal'
	},

	showModal: function(){
<<<<<<< HEAD
		debugger;
		App.artworkModalView.model = this.model;
		App.artworkModalView.render();
		App.artworkModalView.showModal();
=======

		console.log('showModal triggered');
		console.log(this.model);

		new App.Views.ArtworkModal({model: this.model});
		
>>>>>>> f445af4d0010a24996566333e665aa1c6c818ab2
	}
});
