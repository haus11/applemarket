'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('TradeCtrl', function ($scope) {

    $scope.negotiationPartner = 'Peter';

    $scope.tradeInitiated = false;

    $scope.price  = 18;
    $scope.offer  = -1;
    $scope.profit = +22;

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

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.sendOffer = function () {
      $scope.tradeInitiated = true;
    };

    $scope.accepted = function () {

    };

    $scope.rejected = function () {

    };
  });
