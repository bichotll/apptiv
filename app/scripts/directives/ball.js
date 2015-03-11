'use strict';

/**
 * @ngdoc directive
 * @name apptivationApp.ball
 */
angular.module('apptivationApp')
  .directive('ball', function ($interval,countriesFactory) {
    return {
      restrict: 'E',
      templateUrl: '../../views/ball.html',
      scope:{
        ballAttributes: '='
      }/*,
      link: link*/
    };
  });
