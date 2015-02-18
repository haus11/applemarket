'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ManageGameCtrl
 * @description
 * # ManageGameCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('ManageGameCtrl', function ($scope, $location, gameData, connectionService, Notification) {

    $scope.manageData =
    {
      'gameName'         : gameData.getGameName(),
      'sessionNumber'    : gameData.getSessionNumber(),
      'maxSessionNumber' : gameData.getMaxSessionNumber(),
      'roundNumber'      : gameData.getRoundNumber(),
      'maxRoundNumber'   : gameData.getMaxRoundNumber(),
      'playerMax'        : gameData.getPlayerMax(),
      'playerFinished'   : 0,
      'showInput'        : gameData.getGameName()
    };

    $scope.endRound = function () {

      if (gameData.getRoundNumber() === gameData.getMaxRoundNumber()) {
        // if this is the last round of the last session end the game and redirect to the Gamelist
        if (gameData.getSessionNumber() === gameData.getMaxSessionNumber())
        {
          var url = config.api.gameFinish.replace('id', gameData.getGameId());

          connectionService.put(url, null)
            .then(function (_data) {
              gameData.setGameFinished();
              console.log("finished game");
              console.log(_data);
              $location.path(config.routes.base);
            })
            .catch(function (_reason) {
              Notification('End Game failed: ' + _reason);
              console.log(_reason);
            });
        }
        // this is the last round of the session, so end the session by creating a new one and start a new round by creating a new one
        else {
          // start new session
          connectionService.post(config.api.sessionCreate, null)
            .then(function (_data) {
              gameData.setSessionNumber(_data.count);
              return connectionService.post(config.api.roundCreate, null);
            })
            .then(function (_data) {
              gameData.setRoundNumber(_data.count);
            })
            .catch(function (_reason) {
              Notification('New Session failed: ' + _reason);
            });
        }
      }
      // just start a new round
      else {
        connectionService.post(config.api.roundCreate, null)
          .then(function (_data) {
            gameData.setRoundNumber(_data.count);
          })
          .catch(function (_reason) {
            Notification('New Round failed: ' + _reason);
          });
      }
    };

  });
