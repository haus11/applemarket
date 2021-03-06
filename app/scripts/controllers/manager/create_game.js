/*global config*/

'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:CreateGameCtrl
 * @description
 * # CreateGameCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('CreateGameCtrl', function ($scope, $location, connectionService, notificationService, gameData, playerData) {

    $scope.inputData =
    {
      'gameName'          : undefined,
      'maxSessionNumber'  : gameData.getMaxSessionNumber(),
      'maxRoundNumber'    : gameData.getMaxRoundNumber(),
      'playerMax'         : gameData.getPlayerMax()
    };

    playerData.setIsGameManager(true);

    $scope.increaseMaxSessions = function () {
      $scope.inputData.maxSessionNumber++;
    };

    $scope.decreaseMaxSessions = function () {
      $scope.inputData.maxSessionNumber--;
    };

    $scope.increaseMaxRounds = function () {
      $scope.inputData.maxRoundNumber++;
    };

    $scope.decreaseMaxRounds = function () {
      $scope.inputData.maxRoundNumber--;
    };

    $scope.increaseTime = function () {
      $scope.inputData.timeLeft++;
    };

    $scope.decreaseTime = function () {
      $scope.inputData.timeLeft--;
    };

    $scope.increasePlayerMax = function (_value) {
      $scope.inputData.playerMax += _value;
    };

    $scope.decreasePlayerMax = function (_value) {
      if ($scope.inputData.playerMax > 6) {
        $scope.inputData.playerMax -= _value;
      }
    };

    $scope.createGame = function () {
      var postData = {
        'secret'     : config.api.secret,
        'name'       : $scope.inputData.gameName,
        'playerMax'  : $scope.inputData.playerMax
      };

      connectionService.post(config.api.serverCreate, postData)
        .then(function (_data) {

          gameData.setGameName($scope.inputData.gameName);
          gameData.setMaxSessionNumber($scope.inputData.maxSessionNumber);
          gameData.setMaxRoundNumber($scope.inputData.maxRoundNumber);
          gameData.setPlayerMax(_data.game.playerMax);
          gameData.setGameId(_data.game.id);
          gameData.setPlayerId(_data.user.id);

          $location.path(config.routes.lobby);
        })
        .catch(function (_reason) {
          notificationService.notify($scope, 'Game creation failed', _reason);
      });
    };
  });
