(function () {
  'use strict';

  angular.module('public')
  .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['UserinfoService', 'ApiPath'];
  function UserInfoController (UserinfoService, ApiPath){
    var $ctrl = this;

    $ctrl.user = UserinfoService.getUser();
    $ctrl.basePath = ApiPath;
  }

})();
