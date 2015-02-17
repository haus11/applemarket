'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:CreateGameCtrl
 * @description
 * # CreateGameCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('CreateGameCtrl', function ($scope, gameData, $location, connectionService, Notification) {

    $scope.inputData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : 0,
      'roundNumber'   : 0,
      'timeLeft'      : 0,
      'playerMax'     : 0
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

    $scope.increasePlayerMax = function () {
      $scope.inputData.playerMax++;
    };

    $scope.decreasePlayerMax = function () {
      $scope.inputData.playerMax--;
    };

    $scope.createGame = function () {
      var postData = {
        'secret'     : "apple",
        'name'       : $scope.inputData.gameName,
        'playerMax'  : $scope.inputData.playerMax
      };

      console.log(postData);

      connectionService.post(config.api.server_create, postData)
        .then(function (_data) {
          gameData.setGameName(_data.name);
          gameData.setSessionNumber($scope.inputData.sessionNumber);
          gameData.setRoundNumber($scope.inputData.roundNumber);
          gameData.setMaxPlayer(_data.playerMax);
          gameData.setServerId(_data.id);

          $location.path(config.routes.lobby);
        })
        .catch(function (_reason) {
          Notification('Game creation failed: ' + _reason);
        });

    };
  });
