'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('ProfileCtrl', function ($scope, configData, playerData, tradeService, roleGenerator) {

    //console.log(roleGenerator.generateTypeDistribution(29));

    $scope.inputData =
    {
      'name'        : playerData.getPlayerName(),
      'studentId'   : playerData.getStudentId(),
      'showInput'   : playerData.getPlayerName() == undefined
    };

    $scope.user         = configData.getPlayerRule('B');
    $scope.supplierText = configData.getSupplierText();
    $scope.demanderText = configData.getDemanderText();

    $scope.tradeData = {
      pricePaid : tradeService.getPricePaid(),
      profit    : tradeService.getProfit()
    }


    //#############################################################################
    //                          Scope Functions
    //#############################################################################

    $scope.saveData = function () {
      playerData.setPlayerName($scope.inputData.name);
      playerData.setStudentId($scope.inputData.studentId);

      $scope.inputData.showInput = false;
    };
  });
