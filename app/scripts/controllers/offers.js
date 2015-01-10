'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('OffersCtrl', function ($scope, $modal) {

    $scope.trade = function(){

      var modalInstance = $modal.open({
        templateUrl: 'tradeModal.html',
        controller: 'ModalCtrl',
        size: 'sm'
      });
    }
  });

angular.module('applemarketApp')
  .controller('ModalCtrl', function ($scope, $modal, $modalInstance) {

    $scope.price  = 18;
    $scope.offer  = -1;
    $scope.profit = +22

    $scope.increasePrice = function () {
      $scope.price  = $scope.price + 1;
      $scope.profit = $scope.profit - 1;
      $scope.offer  = $scope.offer + 1;
    }

    $scope.decreasePrice = function () {
      $scope.price = $scope.price - 1;
      $scope.profit = $scope.profit + 1;
      $scope.offer  = $scope.offer - 1;
    }

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.accepted = function () {
      $modalInstance.close();
      $modalInstance = $modal.open({
        templateUrl: 'tradeModalSucc.html',
        controller: 'ModalCtrl',
        size: 'sm'
      });
    }

    $scope.rejected = function () {
      $modalInstance.close();
      $modalInstance = $modal.open({
        templateUrl: 'tradeModalFail.html',
        controller: 'ModalCtrl',
        size: 'sm'
      });
    }
  });
