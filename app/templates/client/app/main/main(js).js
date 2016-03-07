(function () {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .config(config);

  /* @ngInject */
  function config($stateProvider) { 
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    });
  }

})();  