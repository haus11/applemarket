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
    var offer;

    var pricePaid = 0.0;
    var profit    = 0.0;
    var isOpenOffer = false;
    var isRunningTrade = false;
    var isOpenTrade = false;

    var availableOffers = [];

    return {
      setOffer : function (_offer) {
        offer = _offer;
      },

      getOffer : function () {
        return offer;
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
      },

      pushAvailableOffer : function (_offer) {
        availableOffers.push(_offer);
      },

      setAvailableOffers : function (_offers) {
        availableOffers = _offers;
      },

      getAvailableOffers : function () {
        return availableOffers;
      },
      setIsOpenOffer : function (_isOpenOffer) {
        isOpenOffer = _isOpenOffer;
      },

      getIsOpenOffer : function () {
        return isOpenOffer;
      },

      setIsRunningTrade : function (_isRunningTrade) {
        isRunningTrade = _isRunningTrade;
      },

      getIsRunningTrade : function () {
        return isRunningTrade;
      },

      setIsOpenTrade : function (_isOpenTrade) {
        isOpenTrade = _isOpenTrade;
      },

      getIsOpenTrade : function () {
        return isOpenTrade;
      }
    };
  });
