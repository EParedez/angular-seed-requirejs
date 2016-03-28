/*'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');
*/
define(['angular'], function(ng) {
   return ng.module('myApp.version', ['myApp.version.interpolate-filter','myApp.version.version-directive'])
   .value('version', '0.1');;
});
