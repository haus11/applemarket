'use strict';

function updateGameData($scope, gameData) {

  $scope.gameInfoData =
  {
    'gameName'        : gameData.getGameName(),
    'sessionNumber'   : gameData.getSessionNumber(),
    'maxSessionNumber': gameData.getMaxSessionNumber(),
    'roundNumber'     : gameData.getRoundNumber(),
    'maxRoundNumber'  : gameData.getMaxRoundNumber()
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

// prevent user from reloading or closing tab, because game connection will be lost
//window.onbeforeunload = function (e) {
//  var message = "Do you really want to reload or close this page? Your gamesession will be lost and you will be disconnected from the game!";
//  e = e || window.event;
//  // For IE and Firefox
//  if (e) {
//    e.returnValue = message;
//  }
//
//  // For Safari
//  return message;
//};
