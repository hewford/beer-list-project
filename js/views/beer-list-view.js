// The DOM element for a todo item...
BeerListView = Backbone.View.extend({

  template: Handlebars.compile($('#item-template').html()),

  events: {
  },

  initialize: function () {
    // this.listenTo(this.model, 'destroy', this.removeToDo);
  },


  render: function () {

    // console.log('THIS MODEL.toJSON: ')
    // console.log(this.model.toJSON());
    // console.log('MODELS: '+ appView.attributes)
    this.$el.html(this.template(this.model.toJSON()));
    // console.log("THIS:")
    // console.log(this);

    return this;
  }


});
