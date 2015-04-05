App.Views.GalleryModal = Backbone.View.extend({
  initialize: function() {
    console.log('gallery modal');
    this.template = Handlebars.compile($('#gallery-modal').html());
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    var renderedView = this.template(this.model.toJSON());
    this.$el.html(renderedView);
    $('#artwork-modal').append(this.$el);
    new App.Views.CommentsListView({collection: this.model.artComments});
  },

  events: {
    'click button[name="comment"]': 'comment',
    'click button[name="close"]': 'close'
  },

  comment: function() {
    App.router.navigate('my_gallery/' + this.model.id + '/add_comment', {trigger: true});
  },

  close: function() {
    $('#artwork-modal').hide();
    App.router.navigate(App.router.preModalRoute, {trigger: true});
  }
})
