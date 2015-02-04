'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:StartGameCtrl
 * @description
 * # StartGameCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('StartGameCtrl', function ($scope, $location, gameData) {
    $scope.inputData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : 0,
      'roundNumber'   : 0,
      'timeLeft'      : 0,
      'slots'         : 0,
      'showInput'     : gameData.getGameName() == undefined
    };

    $scope.startGame = function () {

        $location.path("/manager/manage-game");

    };
  });
