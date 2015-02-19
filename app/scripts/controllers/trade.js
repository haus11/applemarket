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
  .controller('TradeCtrl', function ($scope, $location, playerData, tradeService) {

    //#############################################################
    //                           Base
    //#############################################################

    $scope.isDemander   = playerData.isDemander();
    $scope.trade        = tradeService.getTrade();

    $scope.customPrice  = playerData.getCustomPrice();
    $scope.startPrice   = playerData.getStartPrice();
    $scope.offer        = $scope.trade.price;
    $scope.newOffer     = $scope.trade.price;
    $scope.profit       = $scope.isDemander ? ($scope.startPrice - $scope.offer) : ($scope.offer - $scope.startPrice);

    //#############################################################
    //                    Functions
    //#############################################################

    $scope.increasePrice = function () {
      var oldOffer = $scope.newOffer;

      $scope.newOffer++;

      if ($scope.isDemander) {
        $scope.profit--;

        if ($scope.profit < 0) {
          $scope.profit = 0;
          $scope.newOffer = oldOffer;
        }
      }
      else {
        $scope.profit++;
      }
    };

    $scope.decreasePrice = function () {
      var oldOffer = $scope.newOffer;

      $scope.newOffer--;

      if ($scope.newOffer < 0) {
        $scope.newOffer = oldOffer;
      }
      else {
        if ($scope.isDemander) {
          $scope.profit++;
        }
        else {
          $scope.profit--;

          if ($scope.profit < 0) {
            $scope.profit = 0;
            $scope.newOffer = oldOffer;
          }
        }
      }
    };

    $scope.sendOffer = function () {
      $location.path(config.routes.offers);
    };

    $scope.accepted = function () {
      console.log($scope.offer + ' | ' + $scope.profit);
      tradeService.setPricePaid($scope.offer);
      tradeService.setProfit($scope.profit);
      $location.path(config.routes.tradeSuccess);
    };

    $scope.rejected = function () {

    };

  });
