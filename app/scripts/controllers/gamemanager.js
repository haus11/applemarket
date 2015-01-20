'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:GamemanagerCtrl
 * @description
 * # GamemanagerCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('GamemanagerCtrl', function ($scope, gameData) {

    $scope.gameInfoData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : gameData.getSessionNumber(),
      'roundNumber'   : gameData.getRoundNumber(),
      'timeLeft'      : gameData.getTime() // in minutes
    };

    $scope.increaseSessions = function () {
      $scope.gameInfoData.sessionNumber++;
    };

    $scope.decreaseSessions = function () {
      $scope.gameInfoData.sessionNumber--;
    };

    $scope.increaseRounds = function () {
      $scope.gameInfoData.roundNumber++;
    };

    $scope.decreaseRounds = function () {
      $scope.gameInfoData.roundNumber--;
    };

    $scope.increaseTime = function () {
      $scope.gameInfoData.timeLeft++;
    };

    $scope.decreaseTime = function () {
      $scope.gameInfoData.timeLeft--;
    };

    $scope.startGame = function () {
      gameData.setSessionNumber($scope.gameInfoData.sessionNumber);
      gameData.setRoundNumber($scope.gameInfoData.roundNumber);
      gameData.setTime($scope.gameInfoData.timeLeft * 60);
    };
  });
