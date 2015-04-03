App.Views.GalleryPiece = Backbone.View.extend({

  initialize: function() {
    console.log('gallery piece view');
    this.template = Handlebars.compile($('#gallery-piece').html());
    this.listenTo(this.model,'change',this.render);
    this.render();
  },

  render: function() {
    var renderedTemplate = this.template(this.model.toJSON());
    console.log(this.model.toJSON());
    this.$el.html(renderedTemplate);
    $('#my-gallery').append(this.$el);
  }

  events: {
    'click img': 'modal'
  },

  modal: function() {
    new App.Views.ArtworkModal({model: this.modal})
  }

});
