(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories){
    //console.log("Categories : ", categories);

    var categoryCtrl = this;
    categoryCtrl.categories = categories;
  }

})();
