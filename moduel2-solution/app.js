(function (){
  'use strict';

  angular.module('ShoppingListCheckApp', [])
    .controller ('ToBuyController', ToBuyController)
    .controller ('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService){
    var toBuyItemsList = this;

    toBuyItemsList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyItemsList.itemBought = function (itemIndex){
        ShoppingListCheckOffService.itemBought(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtItemsList = this;

    boughtItemsList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      {name: "cookies", quantity: 10},
      {name: "cake", quantity: 5},
      {name: "pepto", quantity: 2},
      {name: "Choclate", quantity: 20},
      {name: "Milk", quantity: 1}
    ];
    var boughtItems = [];

    service.getToBuyItems = function(){
      return toBuyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };

    service.itemBought = function(itemIndex){

      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);

    };

  }

})();
