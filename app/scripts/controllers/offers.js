'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('OffersCtrl', function ($scope, playerData) {

    //$scope.trade = function(){
    //  var modalInstance = $modal.open({
    //    templateUrl: '../views/trade/trade.html',
    //    controller: 'ModalCtrl',
    //    size: 'sm'
    //  });
    //};

    $scope.inputData =
    {
      'supplierPrice' : 0
    };

    $scope.isDemander         = false;
    $scope.isSupplier         = false;
    $scope.showSupplierForm   = true;
    $scope.showDemanders      = false;

    $scope.demanderOrSupplier = playerData.getDemanderOrSupplier();

    if ($scope.demanderOrSupplier == 'supplier') {
      $scope.isSupplier = true;
    }
    else if ($scope.demanderOrSupplier == 'demander') {
      $scope.isDemander = true;
    }

    $scope.saveSupplierPrice = function () {
      $scope.showSupplierForm = false;
      $scope.showDemanders    = true;
    };
  });
