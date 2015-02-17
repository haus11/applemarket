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
  .controller('CreateGameCtrl', function ($scope, $location, connectionService, Notification, gameData, playerData) {

    $scope.inputData =
    {
      'gameName'          : gameData.getGameName(),
      'maxSessionNumber'  : gameData.getMaxSessionNumber(),
      'maxRoundNumber'    : gameData.getMaxRoundNumber(),
      'playerMax'         : 0
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

    $scope.increasePlayerMax = function () {
      $scope.inputData.playerMax++;
    };

    $scope.decreasePlayerMax = function () {
      $scope.inputData.playerMax--;
    };

    $scope.createGame = function () {
      var postData = {
        'secret'     : "penis1234",
        'name'       : $scope.inputData.gameName,
        'playerMax'  : $scope.inputData.playerMax
      };

      connectionService.post(config.api.serverCreate, postData)
        .then(function (_data) {

          gameData.setGameName(_data.name);
          gameData.setMaxSessionNumber($scope.inputData.maxSessionNumber);
          gameData.setMaxRoundNumber($scope.inputData.maxRoundNumber);
          gameData.setPlayerMax(_data.playerMax);
          gameData.setGameId(_data.id);

          console.log(_data);
          $location.path(config.routes.lobby);
        })
        .catch(function (_reason) {
          Notification('Game creation failed: ' + _reason);
        });

    };
  });
