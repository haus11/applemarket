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
  .controller('TradeCtrl', function ($scope, $location, playerData, tradeService, connectionService, notificationService) {

    //#############################################################
    //                           Base
    //#############################################################

    $scope.isDemander   = playerData.isDemander();
    $scope.trade        = tradeService.getOffer();

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
      console.log("accept");
      // if it's a direct accept
      if (tradeService.getIsOpenOffer()) {
        console.log("directAccept")
        var payload = {
          price : $scope.offer,
          direct : true
        };

        console.log(payload);
        var url = config.api.trade_create.replace(':offerId', tradeService.getOffer().id);
        console.log(url);
        connectionService.post(url, payload)
          .then(function (_data) {
            console.log(_data);
            tradeService.setPricePaid($scope.offer);
            tradeService.setProfit($scope.profit);
            $location.path(config.routes.tradeSuccess);
          })
          .catch(function (_reason) {
            notificationService.notify($scope, 'Could not do accept trade', _reason);
          });
      }
    };

    $scope.rejected = function () {

    };

  });
