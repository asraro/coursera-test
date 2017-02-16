(function () {
  'use strict';

  angular.module('common')
  .service('UserinfoService', UserinfoService);

  UserinfoService.$inject = ['ApiPath'];
  function UserinfoService(ApiPath) {
    var service = this;

    service.saveUser = function(user){
      service.user = user;
    //  console.log("User Info: ", user);
    };

    service.getUser = function() {
      return service.user;
    }

  }


})();
