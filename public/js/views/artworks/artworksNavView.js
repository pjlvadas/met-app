App.Views.ArtworksNavView = Backbone.View.extend({

	initialize: function(){
		console.log('ARTWORKS NAV VIEW CREATED');
		this.artworkNavTemplate = Handlebars.compile($('#artwork-nav-view-template').html());
		this.renderNav();
	},

	renderNav: function(){
		var renderedTemplate = this.artworkNavTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		this.$el.appendTo($('#search-results'));
	},

	events: {
		'click .search-view': 'showModal'
	},

	showModal: function(){
		var id = this.model.id;
		App.router.preModalRoute = Backbone.history.getFragment();
		App.router.navigate('artwork/' + id, { trigger:true });
	}
});
