(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {

    var service = this;

    service.getAllCategories = function (){
      return $http({
        method: "GET",
        url: (ApiBasePath + '/categories.json')
      })
      .then (function (response){
        console.log("Response: ", response.data);
        return response.data;
      });

    };

    service.getItemsForCategory = function (categoryShortName){

      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      })
      .then (function (response) {
        console.log("Data", response.data.menu_items.length);
        return response.data;
      });

    };

  }

})();
