'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('TradeCtrl', function ($scope, playerData, tradeService) {

    //#############################################################
    //                           Base
    //#############################################################

    $scope.isDemander = playerData.isDemander();
    $scope.trade      = tradeService.getTrade();

    $scope.tradeInitiated = false;

    $scope.price  = 18;
    $scope.offer  = -1;
    $scope.profit = +22;

    //#############################################################
    //                    Functions
    //#############################################################

    $scope.increasePrice = function () {
      $scope.price++;
      $scope.profit--;
      $scope.offer++;
    };

    $scope.decreasePrice = function () {
      $scope.price--;
      $scope.profit++;
      $scope.offer--;
    };

    $scope.sendOffer = function () {
      $scope.tradeInitiated = true;
    };

    $scope.accepted = function () {

    };

    $scope.rejected = function () {

    };

  });
