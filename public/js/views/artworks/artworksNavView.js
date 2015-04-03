App.Views.ArtworksNavView = Backbone.View.extend({

	tagName: 'section',

	className: 'artworks',

	initialize: function(){
		console.log('ARTWORKS NAV VIEW CREATED');
		this.artworkNavTemplate = Handlebars.compile($('#artwork-nav-view-template').html());
		this.renderNav();
	},

	renderNav: function(){

		var renderedTemplate = this.artworkNavTemplate(this.model.toJSON());

		this.$el.html(renderedTemplate);

		this.$el.appendTo($('#main'));
	},

	events: {
		'click .search-view': 'showModal'
	},

	showModal: function(){

		// console.log('showModal triggered');
		// console.log(this.model);

		new App.Views.ArtworkModal({model: this.model});
		
	}
});
