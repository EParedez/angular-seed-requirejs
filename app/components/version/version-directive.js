/*'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
*/
define(['angular'], function(ng) {
   return ng.module('myApp.version.version-directive', [])
   .directive('appVersion', ['version', function(version) {
     return function(scope, elm, attrs) {
       elm.text(version);
     };
   }]);
});
