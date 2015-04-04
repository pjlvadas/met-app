App.Views.GalleryPiece = Backbone.View.extend({

  initialize: function() {
    console.log('gallery piece view');
    this.template = Handlebars.compile($('#gallery-piece').html());
    this.listenTo(this.model,'change',this.render);
    this.render();
  },

  render: function() {
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    $('#my-gallery').append(this.$el);
  },

  events: {
    'click img': 'modal'
  },

  modal: function() {
    var id = this.model.id;
    App.router.preModalRoute = Backbone.history.getFragment();
    App.router.navigate('my_gallery/' + id, {trigger:true});

  }

});
