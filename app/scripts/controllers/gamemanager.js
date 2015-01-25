'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:GamemanagerCtrl
 * @description
 * # GamemanagerCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('GamemanagerCtrl', function ($scope, gameData, $location) {

    $scope.inputData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : 0,
      'roundNumber'   : 0,
      'timeLeft'      : 0,
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

    $scope.startGame = function () {
      $scope.saveGameData();
      $location.path("/offers");
    };

    $scope.saveGameData = function() {

      gameData.setGameName($scope.inputData.gameName);
      gameData.setSessionNumber($scope.inputData.sessionNumber);
      gameData.setRoundNumber($scope.inputData.roundNumber);
      gameData.setTime($scope.inputData.timeLeft * 60);
      $scope.inputData.showInput = false;
    }
  });
