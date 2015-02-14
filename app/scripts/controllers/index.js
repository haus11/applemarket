'use strict';

function updateGameData($scope, gameData) {

  $scope.gameInfoData =
  {
    'gameName'      : gameData.getGameName(),
    'sessionNumber' : gameData.getSessionNumber(),
    'roundNumber'   : gameData.getRoundNumber()
  };
}

/**
 * @ngdoc function
 * @name applemarketApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('IndexCtrl', function ($scope, $rootScope, gameData) {

    updateGameData($scope, gameData);

    $rootScope.$on('onGameDataChange', function() {

        updateGameData($scope, gameData);
    });
  });

