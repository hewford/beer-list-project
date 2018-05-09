// The DOM element for a todo item...
BeerListView = Backbone.View.extend({

  template: Handlebars.compile($('#item-template').html()),

  events: {
  },

  initialize: function () {
    // this.listenTo(this.model, 'destroy', this.removeToDo);
  },


  render: function () {

    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }


});
