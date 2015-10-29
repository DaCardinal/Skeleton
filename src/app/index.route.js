(function() {
  'use strict';

  angular
    .module('skeleton')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/admin/home',
        templateUrl: 'app/components/admin/views/home/home.html',
        controller: 'HomeController',
        controllerAs: 'main'
      });

    $urlRouterProvider.when('', '/admin/login');
    $urlRouterProvider.when('/', '/admin/login');
    // $urlRouterProvider.otherwise('/');
  }

})();
