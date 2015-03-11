'use strict';

/**
 * @ngdoc service
 * @name apptivationApp.countriesFactory
 * @description
 * # eventFactory
 * Api in the apptivationApp.countriesFactory
 */
angular.module('apptivationApp')
  .factory('countriesFactory', function ($rootScope,$http) {
    var dataFactory = {};
    var urlBase = 'http://54.68.46.22/test/one';

    dataFactory.getCountries = function (params) {
      return $http.get(urlBase + '/countries');
    };

    return dataFactory;
  });
