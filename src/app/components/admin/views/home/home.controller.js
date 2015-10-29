(function() {
  'use strict';

  angular
    .module('skeleton')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $timeout, $state, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1445477261635;
    vm.showToastr = showToastr;
    vm.testClick = testClick;
    vm.loginClick = loginClick;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function testClick() {
        $state.go('skeleton.admin.profile');
    }

    function loginClick() {
      $state.go('skeleton-blank.login');
    }
  }
})();
