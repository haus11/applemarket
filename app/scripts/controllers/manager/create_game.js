'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:CreateGameCtrl
 * @description
 * # CreateGameCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('CreateGameCtrl', function ($scope, gameData, $location, connectionService) {

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
        'secret'     : "penis1234",
        'name'       : $scope.inputData.gameName,
        'playerMax'  : $scope.inputData.playerMax
      };

      console.log(postData);

      connectionService.post(config.api.server_create, postData, function (_data, _jwres) {

        gameData.setGameName(_data.name);
        gameData.setSessionNumber($scope.inputData.sessionNumber);
        gameData.setRoundNumber($scope.inputData.roundNumber);
        gameData.setPlayerMax(_data.playerMax);
        gameData.setServerId(_data.id);

        console.log(_data);
        console.log(_jwres);

        $location.path(config.routes.lobby);
      });

    };
  });
