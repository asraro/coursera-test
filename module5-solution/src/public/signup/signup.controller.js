(function (){
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserinfoService'];
  function SignupController(MenuService, UserinfoService){
    var signupCtrl = this;

    signupCtrl.checkDish = function (){
      //MenuService.getMenuItems('A1');
      //console.log("Inside checkDish: ", MenuService.getMenuItem($ctrl.user.favdish));

      var promise = MenuService.getMenuItem(signupCtrl.user.favdish);

      promise.then(function(item){
        signupCtrl.errorMessage = "";
        signupCtrl.itemFound = item;

        var userinfo = {
          firstName: signupCtrl.user.firstname,
          lastName: signupCtrl.user.lastname,
          email: signupCtrl.user.email,
          phone: signupCtrl.user.phone,
          favDish: signupCtrl.user.favdish,
          favDishName: item.name,
          favDishDesc: item.description
        };

        UserinfoService.saveUser(userinfo);

        //console.log("Item: ", item);
        signupCtrl.completed = true;
      })
      .catch(function (error) {
        signupCtrl.errorMessage = "No such menu number exists";
        //console.log(signupCtrl.errorMessage);
      });

    };

  }

})();
