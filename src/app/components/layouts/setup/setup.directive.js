(function(){
  'use strict';

  angular.module('skeleton.layouts').directive('skeletonDefaultContent', skeletonDefaultContent);

  /*@ngInject */
  function skeletonDefaultContent($rootScope, $compile, $templateRequest, $timeout){

    var directive = {
      link: link,
      replace: true,
      restrict: 'A'
    }

    return directive;

    function link($scope, $element){
      $scope.$on('$stateChangeStart', scrollToTop);

      $scope.$on('$viewContentLoaded', NQContent);

      function scrollToTop(){
        $element.scrollTop(0);
      }
      function NQContent(){
        var contentView = $element.find('#admin-panel-content-view');

        $templateRequest('app/components/elements/footer/footer.html')
        .then(function(template){
           var linkFn = $compile(template);
           var content = linkFn($scope);
           contentView.append(content);
        });

        //Re-register all components
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
        // $rootScope.$broadcast('$mdContentLoaded', $element);
      }
    }
  }
})();
