/*'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);
*/
define(['angular'], function(ng) {
  /*function ideasHomeController($scope, ideasDataSvc) {

  }*/
   return ng.module('myApp.view1', [])
       .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }]).controller('View1Ctrl', [function() {

    }]);
});
