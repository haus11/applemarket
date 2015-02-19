'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('ProfileCtrl', function ($scope, configData, playerData, tradeService) {

    //console.log(roleGenerator.generateTypeDistribution(29));

    $scope.typeText     = playerData.isDemander() ? 'Demander' : 'Supplier';
    $scope.maxValue     = playerData.getMaxValue();
    $scope.supplierText = configData.getSupplierText();
    $scope.demanderText = configData.getDemanderText();

    $scope.tradeData = [
      {
        value     : 40,
        pricePaid : tradeService.getPricePaid(),
        profit    : tradeService.getProfit()
      },
      {
        value     : 30,
        pricePaid : tradeService.getPricePaid(),
        profit    : tradeService.getProfit()
      },
      {
        value     : 20,
        pricePaid : tradeService.getPricePaid(),
        profit    : tradeService.getProfit()
      },
      {
        value     : 40,
        pricePaid : tradeService.getPricePaid(),
        profit    : tradeService.getProfit()
      },
      {
        value     : 30,
        pricePaid : tradeService.getPricePaid(),
        profit    : tradeService.getProfit()
      },
      {
        value     : 20,
        pricePaid : tradeService.getPricePaid(),
        profit    : tradeService.getProfit()
      }
    ];


    //#############################################################################
    //                          Scope Functions
    //#############################################################################

  });
