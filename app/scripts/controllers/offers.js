'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('OffersCtrl', function ($scope, $location, playerData, tradeService) {

    //$scope.trade = function(){
    //  var modalInstance = $modal.open({
    //    templateUrl: '../views/trade/trade.html',
    //    controller: 'ModalCtrl',
    //    size: 'sm'
    //  });
    //};


    //#############################################################
    //                           Base
    //#############################################################

    $scope.prices             = {
      startPrice  : playerData.getStartPrice(),
      customPrice : playerData.getCustomPrice()
    };
    $scope.isDemander         = playerData.isDemander();
    $scope.showSupplierForm   = $scope.prices.customPrice == 0.0;

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

    $scope.availableOffers = [
      {
        partner : 'Peter',
        price   : 10.0,
        status  : 'Waiting'
      },
      {
        partner : 'Jon',
        price   : 20.0,
        status  : 'Processing'
      },
      {
        partner : 'Ken',
        price   : 35.0,
        status  : 'Waiting'
      }
    ];


    //#############################################################
    //                    Functions
    //#############################################################

    $scope.saveSupplierPrice = function () {
      $scope.showSupplierForm = false;
      playerData.setCustomPrice($scope.prices.customPrice);
    };

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
      $location.path(config.routes.trade_accept);
    };
  });
