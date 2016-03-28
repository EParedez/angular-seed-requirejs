/*'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

*/
define([
    'angular',
    'angular-route',
    //'ngRoute',
    'view1/view1.js',
    'view2/view2.js',
    'components/version/version.js',
    'components/version/version-directive.js',
    'components/version/interpolate-filter.js'
  ], function(ng){
    'use strict';

    return ng.module('myApp', [
      'ngRoute',
      'myApp.view1',
      'myApp.view2',
      'myApp.version'
      ]);

});
