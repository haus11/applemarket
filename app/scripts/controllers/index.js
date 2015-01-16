'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('IndexCtrl', function ($scope, gameData) {

    $scope.gameInfoData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : gameData.getSessionNumber(),
      'roundNumber'   : gameData.getRoundNumber(),
      'timeLeft'      : gameData.getTime()
    };
  });
