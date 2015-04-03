App.Views.ArtworksNavView = Backbone.View.extend({

	tagName: 'section',

	className: 'artworks',

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
		App.artworkModalView.model = this.model;
		App.artworkModalView.render();
		App.artworkModalView.showModal();
	}
});
