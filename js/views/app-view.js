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
    this.listenTo(this.model, 'add', this._updateParsedData);

  },

  _updateParsedData: function() {

    HewsBeerCollection.parseData = []

    HewsBeerCollection.models.forEach(function(item){
      console.log("ITEM.TOJSON:")
      console.log(item.toJSON())
      // this.beerViews.push(item.toJSON())
      HewsBeerCollection.parseData.push(item.toJSON())
    })
    return saveToLocalStorage();
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

    // console.log("THIS MODEL:")
    // console.log(this.model.toJSON)
    // this.beerViews.push(beerView)
    // saveToLocalStorage();
  },



});
