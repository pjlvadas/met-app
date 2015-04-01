App.Collections.Comments = Backbone.Collection.extend({

	initalize: function(){
		console.log('new COMMENTS COLLECTION created');
	},

	url: '/comments',

	model: App.Models.Comment
});