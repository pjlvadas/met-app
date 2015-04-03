App.Models.User = Backbone.Model.extend({

	urlRoot: '/users',

	initialize: function () {
		console.log('new USER MODEL created');
	}
	// defaults: {
	// 	avatar: "http://store.metmuseum.org/content/ebiz/themetstore/invt/10086668/10086668_01_l.jpg",
	// 	name: "Unknown",
	// 	username: "Unknown"
	// }
});
