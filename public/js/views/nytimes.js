App.Views.NyTimes = Backbone.View.extend({

  initialize: function() {
    console.log('new york times view');
    this.template = Handlebars.compile($('#nytimes-template').html());
    this.render();
  },

  render: function() {
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    $('#nytimes-events').append(this.$el);
  }

});
