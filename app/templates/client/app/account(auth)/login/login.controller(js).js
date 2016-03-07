(function () {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($scope, Auth, $location<% if (filters.oauth) { %>, $window<% } %>) {
    $scope.user = {};
    $scope.errors = {};
    $scope.login = login;<% if(filters.oauth) {%>
    $scope.loginOauth = loginOauth;<% } %>

    function login(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };
    <% if(filters.oauth) {%>
    function loginOauth(provider) {
      $window.location.href = '/auth/' + provider;
    };<% } %>
  }
  
})();
