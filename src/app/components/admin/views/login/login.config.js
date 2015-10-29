(function(){
  'use strict';

  angular.module('app.view.login').config(moduleConfig);

  /*@ngInject */
  function moduleConfig($stateProvider){

    $stateProvider
            .state('skeleton-blank.login', {
                url: '/admin/login',
                templateUrl: 'app/components/admin/views/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });
  }
})();
