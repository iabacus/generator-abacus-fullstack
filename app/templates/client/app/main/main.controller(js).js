(function () {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl($scope, $http<% if(filters.socketio) { %>, socket<% } %>, MainSvc) {
    init(); 
    <% if(filters.mongoose) { %>
    $scope.addThing = addThing;
    $scope.deleteThing=  deleteThing;<% } %>

    function init() {
      $scope.awesomeThings = [];

      MainSvc.getThings().success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;<% if(filters.socketio) { %>
        socket.syncUpdates('thing', $scope.awesomeThings);<% } %>
      });
    }
    <% if(filters.mongoose) { %>
    function addThing() {
      if($scope.newThing === '') {
        return;
      }
      MainSvc.addThing({ name: $scope.newThing });
      $scope.newThing = '';
    };

    function deleteThing(thing) {
      MainSvc.deleteThing(thing._id);
    };<% } %><% if(filters.socketio) { %>

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });<% } %>
  }

})();