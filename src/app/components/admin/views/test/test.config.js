(function(){
  'use strict';

  angular.module('app.view.test').config(moduleConfig);

  /*@ngInject */
  function moduleConfig($stateProvider){

    $stateProvider
            .state('skeleton.admin.profile', {
                url: '/admin/profile',
                templateUrl: 'app/components/admin/views/test/test.html',
                controller: 'TestController',
                controllerAs: 'vm'
            });
  }
})();
