/*'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
*/
define(['angular'], function(ng) {
  
   return ng.module('myApp.version.interpolate-filter', [])
   .filter('interpolate', ['version', function(version) {
     return function(text) {
       return String(text).replace(/\%VERSION\%/mg, version);
     };
   }]);

});
