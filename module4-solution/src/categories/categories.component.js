(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/templates/category.template.html',
    bindings: {
      categories: '<'
    }
  });


})();
