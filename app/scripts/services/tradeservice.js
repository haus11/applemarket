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
    var isOpenOffer = true;
    var isRunningTrade = false;
    var isOpenTrade = false;

    var availableOffers = [];
    var availableTrades = [];
    var runningTrades   = [];

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

      resetAvailableOffer : function () {
        availableOffers = [];
      },

      pushAvailableTrade : function (_offer) {
        availableTrades.push(_offer);
      },

      setAvailableTrades : function (_offers) {
        availableTrades = _offers;
      },

      getAvailableTrades : function () {
        return availableTrades;
      },

      resetAvailableTrade : function () {
        availableTrades = [];
      },

      pushRunningTrade : function (_offer) {
        runningTrades.push(_offer);
      },

      setRunningTrades : function (_offers) {
        runningTrades = _offers;
      },

      getRunningTrades : function () {
        return runningTrades;
      },

      resetRunningTrade : function () {
        runningTrades = [];
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
