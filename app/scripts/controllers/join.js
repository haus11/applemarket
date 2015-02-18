/*global config */

'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:InitplayerCtrl
 * @description
 * # InitplayerCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('JoinCtrl', function ($scope, $location, $routeParams, playerData, gameData, connectionService) {

    var gameId = $routeParams.gameId || 0;

    $scope.inputData = {
      'name' : playerData.getPlayerName()
    };

    gameData.setGameId(gameId);

    //#############################################################################
    //                          Scope Functions
    //#############################################################################

    $scope.saveData = function () {
      playerData.setPlayerName($scope.inputData.name);
      playerData.setIsGameManager(false);

      $location.$$search = {};
      $location.path(config.routes.lobby);
    };
  });
