(function() {
  'use strict';

  angular
    .module('skeleton')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $timeout, $log) {
    $log.debug('runBlock end');

    $rootScope.$on('$viewContentLoaded', function() {
      $timeout(function() {
          componentHandler.upgradeAllRegistered();
      });
    });

    //Upgrade DOM when new element is added
    // var mdlUpgradeDom = false;
    // setInterval(function() {
    //   if (mdlUpgradeDom) {
    //     componentHandler.upgradeDom();
    //     mdlUpgradeDom = false;
    //   }
    // }, 200);
    //
    // var observer = new MutationObserver(function () {
    //   mdlUpgradeDom = true;
    // });
    // observer.observe(document.body, {
    //     childList: true,
    //     subtree: true
    // });
  }

})();
