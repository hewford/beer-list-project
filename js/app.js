
var HewsBeerCollection = new BeerCollection();

var appView = new AppView({
  model: HewsBeerCollection,

});


var STORAGE_ID = 'beer-list-distillery';

var saveToLocalStorage = function () {
localStorage.setItem(STORAGE_ID, JSON.stringify(HewsBeerCollection.parseData));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}

HewsBeerCollection.parseData = getFromLocalStorage()
// HewsBeerCollection.models = getFromLocalStorage()

var _updateFromLocalStorage = function(){
  console.log(HewsBeerCollection.parseData)
  HewsBeerCollection.parseData.forEach(function(item){
    console.log(item)
    appView.model.add({
      name:item.name,
      style:item.style,
      avb:item.avb,
      imgURL:item.imgURL,
      about:item.about,
    })

  })

}

$( document ).ready(function() {
    _updateFromLocalStorage();
});
