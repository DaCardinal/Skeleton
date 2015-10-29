(function() {
    'use strict';

    angular
        .module('app.view.login')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.loginTitle = "Sample Login Title";
        vm.testClick = testClick;
        vm.homeClick = homeClick;

        vm.user = {
           email: '',
           password: ''
       };

       ////////////////

       function testClick() {
           $state.go('skeleton.admin.profile');
       }

       function homeClick() {
           $state.go('home');
       }
    }
})();
