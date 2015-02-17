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
        // if this is the last round of the last session end the game and redirect to the serverlist
        if (gameData.getSessionNumber() === gameData.getMaxSessionNumber())
        {
          var url = config.api.gameFinish.replace('id', gameData.getServerId());

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
          var url = config.api.sessionNew.replace('gameId', gameData.getServerId());

          connectionService.post(url, null)
            .then(function (_data) {
              console.log("start new session")
              console.log(_data);
              gameData.increaseSessionNumber();
            })
            .catch(function (_reason) {
              Notification('New Session failed: ' + _reason);
            });

          // start new round
          url = config.api.roundNew.replace('gameId', gameData.getServerId());
          url = url.replace('sessionCount', gameData.getSessionNumber());

          connectionService.post(url, null)
            .then(function (_data) {
              console.log("start new round")
              //console.log(_data);
              gameData.resetRoundNumber();
            })
            .catch(function (_reason) {
              Notification('New Session failed: ' + _reason);
            });
        }
      }
      // just start a new round
      else {
        var url = config.api.roundNew.replace('gameId', gameData.getServerId());
        url = url.replace('sessionCount', gameData.getSessionNumber());

        connectionService.post(url, null)
          .then(function (_data) {
            console.log("start new round");
            gameData.increaseRoundNumber();
          })
          .catch(function (_reason) {
            Notification('New Round failed: ' + _reason);
          });
      }
    };

  });
