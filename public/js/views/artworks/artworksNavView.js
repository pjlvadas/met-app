App.Views.ArtworksNavView = Backbone.View.extend({

	tagName: 'section',

	className: 'artworks',

	initalize: function(){
		console.log('ARTWORKS NAV VIEW CREATED');
		this.artworkNavTemplate = Handlebars.compile($('#artwork-nav-view-template').html());
		this.renderNav();
	},

	renderNav: function(){
		this.$el.html(this.artworkNavTemplate(this.model.toJSON()));
		this.$el.appendTo($('#main'));
	},

	events: {
		'click .artwork-preview': 'showModal'
	},

	showModal: function(){
		App.artworkModalView.model = this.model;
		App.artworkModalView.render();
		App.artworkModalView.showModal();
	}
});