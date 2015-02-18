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
  .controller('OffersCtrl', function ($scope, $location, gameData, playerData, tradeService, connectionService, notificationService) {

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

    $scope.availableTrades = [
      {
        partner : 'Peter',
        price   : 10.0
      },
      {
        partner : 'Jon',
        price   : 20.0
      },
      {
        partner : 'Ken',
        price   : 35.0
      }
    ];

    $scope.runningTrades = [
      {
        partner : 'Peter',
        price   : 10.0,
        myPrice : 13.0,
        status  : 'Waiting'
      },
      {
        partner : 'Jon',
        price   : 20.0,
        myPrice : 18.0,
        status  : 'Processing'
      },
      {
        partner : 'Ken',
        price   : 35.0,
        myPrice : 25.0,
        status  : 'Waiting'
      }
    ];


    //#############################################################
    //                         Supplier
    //#############################################################

    $scope.availableOffers = [];
    //$scope.availableOffers = [
    //  {
    //    partner : 'Peter',
    //    price   : 10.0,
    //    status  : 'Waiting'
    //  },
    //  {
    //    partner : 'Jon',
    //    price   : 20.0,
    //    status  : 'Processing'
    //  },
    //  {
    //    partner : 'Ken',
    //    price   : 35.0,
    //    status  : 'Waiting'
    //  }
    //];

    // create an initial offer as supplier
    $scope.saveSupplierPrice = function () {
      // post initial supplier price
      var postData = {
        'price'   : $scope.prices.customPrice,
        'userId'  : gameData.getPlayerId()
      };
      connectionService.post(config.api.offer, postData)
        .then(function (_data) {
          console.log(_data);
          $scope.showSupplierForm = false;
          playerData.setCustomPrice($scope.prices.customPrice);
        })
        .catch(function (_reason) {
          notificationService.notify($scope, 'Offer creation failed', _reason);
        });
    };

    // when a new offer is created
    connectionService.on(config.api.offerCreated, function (_data) {
      tradeService.pushAvailableOffer(_data);
      $scope.availableOffers = tradeService.getAvailableOffers();
    });

    //#############################################################
    //                    Functions
    //#############################################################

    // a new round is started
    connectionService.on(config.api.roundCreated, function (_data) {
      console.log('new round');
      console.log(_data);
      // if round number = max round number, a new session is started or game is ended
      if (gameData.getRoundNumber() === gameData.getMaxRoundNumber) {
        // game finished
        if (gameData.getSessionNumber() === gameData.getMaxSessionNumber) {
          // locate to the stats
        }
        // a new session is started
        else {
          gameData.resetRoundNumber();
          gameData.increaseSessionNumber();
        }
      }
      // just new round started
      else {
        gameData.increaseRoundNumber();
      }
      tradeService.availableOffers = []; // later get offers from server, if somebody is faster than this instance of client
    });

    //// a new session is started
    //connectionService.on(config.api.sessionCreated, function (_data) {
    //  console.log("new session");
    //  console.log(_data);
    //  gameData.increaseSessionNumber();
    //  gameData.resetRoundNumber();
    //  tradeService.availableOffers = [];
    //});

    $scope.openTrade = function (_trade) {
      tradeService.setTrade(_trade);
      $location.path(config.routes.trade);
    };

    $scope.openRunningTrade = function (_trade) {
      tradeService.setTrade(_trade);
      $location.path(config.routes.trade);
    };

    $scope.openOffer = function (_offer) {
      tradeService.setTrade(_offer);
      $location.path(config.routes.tradeAccept);
    };
  });
