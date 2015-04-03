App.Views.Gallery = Backbone.View.extend({

  initialize: function() {
    console.log('gallery view');
    this.listenTo(this.collection, 'add', this.renderOne);
    this.renderAll();
  },

  renderOne: function(galleryPiece) {
    new App.Views.GalleryPiece({ model: galleryPiece });
  },

  renderAll: function() {
    this.collection.each(this.renderOne, this);
  }

});
