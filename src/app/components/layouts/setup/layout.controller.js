(function(){
  'use strict';

  angular.module('skeleton.layouts').controller('SetupLayoutController', SetupLayoutController);

  /*@ngInject */
  function SetupLayoutController() {

    var vm = this;
    vm.pageTitle = 'sample layout title';
  }
})();
