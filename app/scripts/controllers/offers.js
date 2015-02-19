/*global config:false */

'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('OffersCtrl', function ($rootScope, $scope, $location, gameData, playerData, tradeService, connectionService, notificationService) {

    //#############################################################
    //                           Base
    //#############################################################

    $scope.prices             = {
      startPrice  : playerData.getStartPrice(),
      customPrice : playerData.getCustomPrice()
    };
    $scope.isDemander         = playerData.isDemander();
    $scope.showSupplierForm   = $scope.prices.customPrice === 0.0;

    //#############################################################
    //                         Demander
    //#############################################################

    $scope.availableTrades = [];
    $scope.runningTrades   = [];

    //#############################################################
    //                         Supplier
    //#############################################################

    $scope.availableOffers = [];

    // create an initial offer as supplier
    $scope.saveSupplierPrice = function () {
      // post initial supplier price
      var postData = {
        'price'   : $scope.prices.customPrice
      };
      ç
    };

    connectionService.get(config.api.offersCurRoundGet, null)
      .then(function (_data) {
        console.log(_data);
        $scope.availableOffers = _data;
        tradeService.setAvailableOffers(_data);
      })
      .catch(function (_reason) {
        //notificationService.notify($scope, 'Could not get Offers', _reason);
      });

    // when a new offer is created
    $rootScope.$on(config.bc.onOfferCreated, function (event, _data) {
      console.log('onOfferCreated');
      console.log(_data);
      tradeService.pushAvailableOffer(_data);
      $scope.availableOffers = tradeService.getAvailableOffers();
    });

    //#############################################################
    //                    Functions
    //#############################################################

    $rootScope.$on(config.bc.onTradeCreated, function (event, _data) {
      $scope.availableTrades.push(_data);
    });

    $rootScope.$on(config.bc.onTradeUpdated, function (event, _data) {
      for (var i = 0;  i < $scope.availableTrades.length; i++) {
        if (_data.id === $scope.availableTrades[i].id) {
          $scope.availableTrades.splice(i, 1);
          break;
        }
      }

      for (var i = 0;  i < $scope.runningTrades.length; i++) {
        if (_data.id === $scope.runningTrades[i].id) {
          $scope.runningTrades.splice(i, 1);
          break;
        }
      }

      $scope.availableTrades.push(_data);
      $scope.runningTrades.push(_data);
    });

    $rootScope.$on(config.bc.onTradeAccepted, function (event, _data) {
      for (var i = 0;  i < $scope.availableTrades.length; i++) {
        if (_data.id === $scope.availableTrades[i].id) {
          $scope.availableTrades.splice(i, 1);
          break;
        }
      }

      for (var i = 0;  i < $scope.runningTrades.length; i++) {
        if (_data.id === $scope.runningTrades[i].id) {
          $scope.runningTrades.splice(i, 1);
          break;
        }
      }

    });

    // a new round is started
    $rootScope.$on(config.bc.onNewRound, function (event, _data) {
      gameData.setRoundNumber(_data.count);
      tradeService.availableOffers = []; // later get offers from server, if somebody is faster than this instance of client
    });

    // a new session is started
    $rootScope.$on(config.bc.onNewSession, function (event, _data) {
      console.log(_data);
      gameData.setSessionNumber(_data.session.count);
      playerData.setMaxValue(_data.role.maxValue);
      playerData.setIsDemander(_data.role.type === 'demander');
      $scope.isDemander = _data.role.type === 'demander';
      tradeService.availableOffers = [];
    });

    // game finished
    $rootScope.$on(config.bc.onGameFinished, function () {
      gameData.setGameFinished();
      $location.path(config.routes.profile);
    });

    $scope.openTrade = function (_offer) {
      tradeService.setOffer(_offer);
      $location.path(config.routes.trade);
    };

    $scope.openRunningTrade = function (_offer) {
      tradeService.setOffer(_offer);
      $location.path(config.routes.trade);
    };

    $scope.openOffer = function (_offer) {
      tradeService.setOffer(_offer);
      $location.path(config.routes.tradeAccept);
    };
  });
