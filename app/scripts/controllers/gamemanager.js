'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:GamemanagerCtrl
 * @description
 * # GamemanagerCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('GamemanagerCtrl', function ($scope, gameData, $location, connectionService) {

    $scope.inputData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : 0,
      'roundNumber'   : 0,
      'timeLeft'      : 0,
      'slots'         : 0
    };

    $scope.increaseSessions = function () {
      $scope.inputData.sessionNumber++;
    };

    $scope.decreaseSessions = function () {
      $scope.inputData.sessionNumber--;
    };

    $scope.increaseRounds = function () {
      $scope.inputData.roundNumber++;
    };

    $scope.decreaseRounds = function () {
      $scope.inputData.roundNumber--;
    };

    $scope.increaseTime = function () {
      $scope.inputData.timeLeft++;
    };

    $scope.decreaseTime = function () {
      $scope.inputData.timeLeft--;
    };

    $scope.increaseSlots = function () {
      $scope.inputData.slots++;
    };

    $scope.decreaseSlots = function () {
      $scope.inputData.slots--;
    };

    $scope.startGame = function () {

      var postData = {
        'game_id'     : 2,
        'name'       : $scope.inputData.gameName,
        'player_max'  : $scope.inputData.slots
      };

      connectionService.post(config.api.server_create, postData, function (_data, _jwres) {

        gameData.setGameName(_data.name);
        gameData.setSessionNumber($scope.inputData.sessionNumber);
        gameData.setRoundNumber($scope.inputData.roundNumber);
        gameData.setMaxPlayer(_data.playerMax);
        gameData.setServerId(_data.id);

        $location.path(config.routes.lobby);
      });

    };

  });
