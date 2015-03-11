'use strict';

/**
 * @ngdoc directive
 * @name apptivationApp.selectCountry
 */
angular.module('apptivationApp')
  .directive('selectCountry', function ($interval,countriesFactory) {

    function link(scope, element, attrs) {
      var timeoutId;

      /**
       * Updates the select options with the countries or null
       */
      function updateOptions() {
        var optionsRequest = countriesFactory.getCountries();
        optionsRequest.success(function(data, status, headers, config) {
          //workaround 400
          if (typeof data.data === 'undefined'){
            scope.options = null;
          } else {
            scope.options = data.data;
          }
        });
      }
      //fire it!
      updateOptions();

      /**
       * Starts interval to update it every X time
       */
      function startInterval(){
        timeoutId = $interval(function() {
          updateOptions(); // update DOM
        }, 5000);
      }
      startInterval();

      /**
       * Stops interval
       */
      function stopInterval(){
        $interval.cancel(timeoutId);
        timeoutId = null;
      }

      //assign functions to the scope
      scope.startInterval = startInterval;
      scope.stopInterval = stopInterval;

      //no zombies
      element.on('$destroy', function() {
        stopInterval();
      });
    }

    return {
      restrict: 'E',
      scope: {
        selected: '='
      },
      templateUrl: '../../views/select-country.html',
      link: link
    };
  });
