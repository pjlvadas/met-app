// App.Views.Artwork = Backbone.View.extend({
//
// 	className: 'artwork-result',
//
// 	initialize: function(){
// 		console.log('new ARTWORK PREVIEW VIEW created');
// 		this.template = Handlebars.compile($('#artwork-preview-template').html());
// 		this.renderPreview();
// 	},
//
// 	renderPreview: function(){
// 		var renderedTemplate = this.template(this.model.toJSON());
// 		this.$el.html(renderedTemplate);
// 		this.$el.appendTo($('#search-results'));
// 	},
//
// 	events: {
// 		'click .artwork-preview': 'showModal'
// 	},
//
// 	showModal: function() {
// 		App.artworkModalView.model = this.model;
// 		App.artworkModalView.render();
// 		App.artworkModalView.showModal();
// 	}
//
// });
