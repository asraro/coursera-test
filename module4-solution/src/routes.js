(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    // Redirect to home page if no other URL matches.
    $urlRouterProvider.otherwise('/');

    // Setup UI States
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesController',
      controllerAs: 'categoryCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    })

  }

})();
