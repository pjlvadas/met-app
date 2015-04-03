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
		new App.Views.ArtworkModal({model: this.model});
	}
});
