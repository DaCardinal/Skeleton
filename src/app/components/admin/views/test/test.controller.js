(function(){
  'use strict';

  angular.module('app.view.test').controller('TestController', TestController);

  /*@ngInject */
  function TestController($state){
    var vm = this;
    vm.testTitle = "Sample Test title";
    vm.loginClick = loginClick;
    vm.homeClick = homeClick;

   ////////////////

   function loginClick() {
       $state.go('skeleton-blank.login');
   }

   function homeClick() {
       $state.go('home');
   }
  }
})();
