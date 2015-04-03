App.Views.NavigationView = Backbone.View.extend({

	initialize: function() {
		console.log('NAV VIEW CREATED');
	this.template = Handlebars.compile($('#navigation-view-template').html());
	this.render();
	},

	render: function() {
		this.$el.html(this.template());
		this.$el.appendTo($('#main'));
	},

	events: {
		'click #search-button': 'search'
	},

	search: function() {
		var searchItem = this.$('[name="search-type"]').val();
		var query = this.$('[name="search"]').val();
		console.log(searchItem);
		console.log(query);

		if (searchItem === 'artist') {
			$.ajax({
				url: 'http://scrapi.org/search/' + query,
				method: 'GET'
			}).done(function(data){
				for (var i = 0; i < data.collection.items.length; i++){
					var newModel = new App.Models.Artwork(data.collection.items[i]);
					console.log(newModel);
					new App.Views.ArtworksNavView({ model: newModel });
				}
			});
		} else if (searchItem === 'culture') {
			$.ajax({
				url: 'http://scrapi.org/search/' + query,
				method: 'GET'
			}).done(function(data){
				for (var i = 0; i < data.collection.items.length; i++){
					var newModel = new App.Models.Artwork(data.collection.items[i]);
					console.log(newModel);
					new App.Views.ArtworksNavView({ model: newModel });
				}
			});
		};
	}
});