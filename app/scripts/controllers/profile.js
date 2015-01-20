'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('ProfileCtrl', function ($scope, configData, playerData, roleGenerator) {

    console.log(roleGenerator.generateTypeDistribution(29));

    $scope.inputData =
    {
      'name'        : playerData.getPlayerName(),
      'student_id'  : playerData.getStudentId(),
      'showInput'   : playerData.getPlayerName() == undefined
    };

    $scope.user = configData.getPlayerRule('B');


    //#############################################################################
    //                          Scope Functions
    //#############################################################################

    $scope.saveData = function () {
      playerData.setPlayerName($scope.inputData.name);
      playerData.setStudentId($scope.inputData.student_id);

      $scope.inputData.showInput = false;
    };
  });
