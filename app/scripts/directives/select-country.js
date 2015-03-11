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
          console.log(data, data.data);
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
        console.log('start');
      }
      startInterval();

      /**
       * Stops interval
       */
      function stopInterval(){
        $interval.cancel(timeoutId);
        timeoutId = null;
        console.log('stop');
      }

      //assign functions to the scope
      scope.startInterval = startInterval;
      scope.stopInterval = stopInterval;

      element.on('$destroy', function() {
        stopInterval();
      });
    }


    return {
      restrict: 'E',
      templateUrl: '../../views/select-country.html',
      link: link
    };
  });
