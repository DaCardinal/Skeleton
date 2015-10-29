(function() {
    'use strict';

    angular
        .module('skeleton.components')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('skeleton-blank', {
            abstract: true,
            templateUrl: 'app/components/layouts/setup/setup-blank.html'
        })
        .state('skeleton', {
            abstract: true,
            templateUrl: 'app/components/layouts/setup/setup.html',
            controller: 'SetupLayoutController',
            controllerAs: 'layoutController'
        })
        .state('skeleton.admin', {
            abstract: true,
            views: {
                navbar: {
                    templateUrl: 'app/components/elements/navbar/navbar.html',
                    controller: 'NavBarController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                },
                footer: {
                    template: '<div ui-view="footer"></div>'
                }
            }
        });
    }
})();

// sidebarLeft: {
//     templateUrl: 'app/triangular/components/menu/menu.tmpl.html',
//     controller: 'MenuController',
//     controllerAs: 'vm'
// },
