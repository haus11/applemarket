'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.appCache
 * @description
 * # appCache
 * Factory in the applemarketApp.
 */
angular.module('applemarketApp')
  .factory('appCache', ['$cacheFactory', function ($cacheFactory) {
    return $cacheFactory('appleMarketCache');
  }]);
