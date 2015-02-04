'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ManageGameCtrl
 * @description
 * # ManageGameCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('ManageGameCtrl', function ($scope, gameData) {

    $scope.inputData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : 0,
      'roundNumber'   : 0,
      'timeLeft'      : 0,
      'slots'         : 0,
      'showInput'     : gameData.getGameName() == undefined
    };
  });
