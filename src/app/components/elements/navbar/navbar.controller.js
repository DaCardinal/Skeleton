(function(){
  'use strict';

  angular.module('skeleton.elements').controller('NavBarController', NavBarController);

  /*@ngInject */
  function NavBarController($log){
    var vm = this;
    vm.title = 'sample navbar title';
    vm.drawerToggle = drawerToggle;

    function drawerToggle() {
      var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
      drawer.classList.toggle("is-visible");
    }

  }
})();
