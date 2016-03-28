define([
    'require',
    'angular',
    'angular-route',
    //'ngAria',
    'app'
    //
    //'routes'
], function (require, ng, angular, ngRoute) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['myApp']);
    });
});
