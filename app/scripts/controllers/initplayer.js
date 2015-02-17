/*global config:false */

'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:InitplayerCtrl
 * @description
 * # InitplayerCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('InitplayerCtrl', function ($scope, $location, playerData) {

    $scope.inputData = {
      'name' : playerData.getPlayerName()
    };

    //#############################################################################
    //                          Scope Functions
    //#############################################################################

    $scope.saveData = function () {
      playerData.setPlayerName($scope.inputData.name);

      $location.$$search = {};
      $location.path(config.routes.lobby);
    };
  });
