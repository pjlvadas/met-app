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

	apiRootURL: 'http://scrapi.org/search/',

	events: {
		'click #search-button': 'search'
	},

	search: function() {
		// var searchItem = this.$('[name="search-type"]').val();
		// var query = this.$('[name="search"]').val();

		$.ajax({
			url: this.apiRootURL + 
		})


	}

});


	// searchForArtists: function(artist) {
	// 	console.log("searching for artist's artworks", artist);

	// 	var artist = encodeURI(artist);

	// 	var searchQuery = this.apiRootURL + artist;

	// 	$.ajax({
	// 		url: searchQuery,
	// 		method: 'GET',
	// 		dataType: 'json'
	// 	}).done(this.addArtistArtworks)
	// },

	// addArtistArtworks: function(data) {
	// 	console.log(data);

	// 	var results = data.results;
	// 	App.collection.currentModel = 'artworks';

	// 	var artistModels = results.map(function(artist){
	// 		return new App.Models.Artwork(artist);
	// 	});
	// },

	// searchForCulture: function(culture) {
	// 	console.log("searching for artwork culture", culture);

	// 	var culture = encodeURI(culture);

	// 	var searchQuery = this.apiRootURL + culture;

	// 	$.ajax({
	// 		url: searchQuery,
	// 		method: 'GET',
	// 		dataType: 'json'
	// 	}).done(this.addCultureArtworks)
	// },

	// addCultureArtworks: function(data) {
	// 	console.log(data);

	// 	var results = data.results;
	// 	App.collection.currentModel = 'artworks';

	// 	var cultureModels = results.map(function(culture){
	// 		return new App.Models.Artwork(culture);
	// 	})
	// },
