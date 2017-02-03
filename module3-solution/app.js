(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

// Directive Definition
function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundList: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menuItemsCtrl',
    bindToController: true
  };

  return ddo;
}

// Controller Definition
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menuItemsCtrl = this;

  menuItemsCtrl.getMenuItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menuItemsCtrl.searchTerm);

    promise.then(function (items) {

      menuItemsCtrl.found = items;

      menuItemsCtrl.errorMessage = "";
      if (menuItemsCtrl.found.length === 0 ){
        menuItemsCtrl.errorMessage = "Nothing Found";
      }

    })
    .catch(function (error) {
      console.log(error);
    })
  };

  menuItemsCtrl.removeItem = function(itemIndex){
    menuItemsCtrl.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then (function (result){
      // process result and only keep items that match
      var foundItems = [];
//      console.log(result.data);
//      console.log(result.data.menu_items.length);
      for (var i = 0 ; i < result.data.menu_items.length; i++){
        var itemDescription = result.data.menu_items[i].description;
        if (itemDescription.toLowerCase().indexOf(searchTerm) !== -1 && searchTerm !== ""){
          foundItems.push(result.data.menu_items[i]);
        }
      }
      // return processed items.
      return foundItems;
    });

  };

}

})();
