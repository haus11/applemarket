'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:CreateGameCtrl
 * @description
 * # CreateGameCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('CreateGameCtrl', function ($scope, gameData, $location) {

    $scope.inputData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : 0,
      'roundNumber'   : 0,
      'timeLeft'      : 0,
      'slots'         : 0,
      'showInput'     : gameData.getGameName() == undefined
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

    $scope.createGame = function () {
      $scope.saveGameData();
      $location.path("/manager/start-game");
    };

    $scope.saveGameData = function() {

      gameData.setGameName($scope.inputData.gameName);
      gameData.setSessionNumber($scope.inputData.sessionNumber);
      gameData.setRoundNumber($scope.inputData.roundNumber);
      gameData.setTime($scope.inputData.timeLeft * 60);
      $scope.inputData.showInput = false;
    }
  });
