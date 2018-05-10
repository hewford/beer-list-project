var BeerRouter = Backbone.Router.extend({
  routes: {
    'beers/:id': 'showReviews',
    '*default': 'showBeers'
  },

  showReviews: function (id) {

  },

  showBeers: function () {

  }
});
