'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.tradeService
 * @description
 * # tradeService
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('tradeService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var trade = undefined;

    return {
      setTrade : function (_trade) {
        trade = _trade;
      },

      getTrade : function () {
        return trade;
      }

    };
  });
