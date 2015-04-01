App.Collection.Users = Backbone.Collection.extend({

	model: App.Models.User,

	getUsernames: function () {
		var usernames = this.map(function(model, idx) {
			return model.get('username');
		});
		return usernames;
	}
});