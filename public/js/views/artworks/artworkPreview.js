App.Views.Artwork = Backbone.View.extend({

	tagName: 'aside',

	className: 'artwork',

	initalize: function(){
		console.log('new ARTWORK PREVIEW VIEW created');
		this.artworkPreviewTemplate = Handlebars.compile($('#artwork-preview-template').html());
		this.renderPreview();
	},

	renderPreview: function(){
		this.$el.html(this.artworkPreviewTemplate(this.model.toJSON()));
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