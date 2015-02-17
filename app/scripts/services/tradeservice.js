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

    var trade;

    var pricePaid = 0.0;
    var profit    = 0.0;

    return {
      setTrade : function (_trade) {
        trade = _trade;
      },

      getTrade : function () {
        return trade;
      },

      setPricePaid : function (_pricePaid) {
        pricePaid = _pricePaid;
      },

      getPricePaid : function () {
        return pricePaid;
      },

      setProfit : function (_profit) {
        profit = _profit;
      },

      getProfit : function () {
        return profit;
      }

    };
  });
