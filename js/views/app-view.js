// Our overall **AppView** is the top-level piece of UI.
AppView = Backbone.View.extend({
  el: 'body',

  beerViews:[],


  events: {
    'click #submit-beer': 'addBeerToModel',
  },

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added.
  initialize: function () {
    this.$list = $('.beer-list');

    this.listenTo(this.model, 'add', this._addBeerToView);

  },

  addBeerToModel: function () {
    this.model.add({
      name:$('#name-input').val(),
      style:$('#style-input').val(),
      avb:$('#avb-input').val(),
      imgURL:$('#url-input').val(),
      about:$('#about-beer').val()

    })
    $('#name-input').val(''),
    $('#style-input').val(''),
    $('#avb-input').val(''),
    $('#url-input').val(''),
    $('#about-beer').val('')
  },

  _addBeerToView: function (beer) {
    var beerView = new BeerListView({ model: beer });
    this.$list.append(beerView.render().el);
    this.beerViews.push(beerView)
    // saveToLocalStorage();

    },

});
