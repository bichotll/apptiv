'use strict';

/**
 * @ngdoc overview
 * @name apptivationApp
 * @description
 * # apptivationApp
 *
 * Main module of the application.
 */
angular
  .module('apptivationApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
