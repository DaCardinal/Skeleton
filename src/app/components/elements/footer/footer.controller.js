(function(){
  'use strict';

  angular.module('skeleton.elements').controller('FooterController', FooterController);

  /*@ngInject */
  function FooterController(){
    var vm = this;
    vm.title = 'Sample footer title title';
    vm.copyright = 'Copyright (c) 2015 Copyright Holder All Rights Reserved.';
  }

})();
