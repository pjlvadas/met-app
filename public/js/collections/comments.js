App.Collections.Comments = Backbone.Collection.extend({

	initialize: function(){
		console.log('new COMMENTS COLLECTION created');
	},

	url: '/comments',

	model: App.Models.Comment
});
