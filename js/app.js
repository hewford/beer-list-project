
var HewsBeerCollection = new BeerCollection();

var appView = new AppView({
  model: HewsBeerCollection,
});


// var STORAGE_ID = 'beer-list-distillery';
//
// var saveToLocalStorage = function () {
// localStorage.setItem(STORAGE_ID, JSON.stringify(appView.beerViews));
// }
//
// var getFromLocalStorage = function () {
//   return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
// }

// appView.beerViews = (getFromLocalStorage)
