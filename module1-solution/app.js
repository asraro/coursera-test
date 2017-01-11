(function (){
  'use strict';

  angular.module('LunchCheckApp', [])
    .controller ('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope){
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkLunch = function() {
      // console.log($scope.lunchMenu);
      // console.log($scope.lunchMenu.split(','));
      // console.log($scope.lunchMenu.split(',').length);

      var strLength = $scope.lunchMenu.split(',').length;
      //console.log(strLength);

      if ($scope.lunchMenu.length == 0)
        $scope.message = "Please enter data first";
      else if (strLength > 0 && strLength <= 3){
        $scope.message = "Enjoy";
      }
      else if (strLength > 3){
        $scope.message = "Too much!"
      }

    };

  }

})();
