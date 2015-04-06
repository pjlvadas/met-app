App.Views.NavigationView = Backbone.View.extend({

	el: '#search',

	initialize: function() {
		console.log('NAV VIEW CREATED');
	},

	render: function() {
		this.$el.html(this.template());
		this.$el.appendTo($('#main'));
	}
});
