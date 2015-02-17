/*global config */

'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ManagersettingsCtrl
 * @description
 * # ManagersettingsCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('LobbyCtrl', function ($scope, $location, gameData, connectionService, Notification) {
    $scope.lobbyData =
    {
      'gameName'        : gameData.getGameName(),
      'playerMax'       : gameData.getPlayerMax(),
      'numberOfPlayers' : 0,
      'showInput'       : gameData.getGameName() === undefined
    };

    $scope.playerList = gameData.getPlayerList();

    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################

    // Event: on player joins
    connectionService.on(config.api.playerJoined, function (_data) {

      $scope.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.playerList);

      //if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
      //  $scope.$apply();
      //}
    });

    // on player reconnects
    connectionService.on(config.api.playerReconnected, function (_data) {

      $scope.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.playerList);

      //if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
      //  $scope.$apply();
      //}

    });

    // on player disconnects
    connectionService.on(config.api.playerLeaved, function (_data) {
      console.log('UserDisconnect');

      for (var i = 0; i < $scope.playerList.length; i++) {
          if ($scope.playerList[i].id === _data.id) {
              $scope.playerList.splice(i, 1);
              $scope.lobbyData.numberOfPlayers--;
              gameData.setPlayerList($scope.playerList);
              break;
          }
      }
    });

    // on player data changes
    connectionService.on(config.api.userUpdate, function (_data) {

      for (var i = 0; i < $scope.playerList.length; i++) {
        if ($scope.playerList[i].id === _data.id) {
          $scope.playerList[i] = _data;
          gameData.setPlayerList($scope.playerList);
          break;
        }
      }
    });

    $scope.startGame = function () {
      // start the game
      var url = config.api.gameStart.replace('id', gameData.getServerId());
      connectionService.put(url, null)
        .then(function () {
          gameData.increaseSessionNumber();

          url = config.api.sessionNew.replace('gameId', gameData.getServerId());
          return connectionService.post(url, null);
        })
        .then(function () {
          gameData.resetRoundNumber();
          url = config.api.roundNew.replace('gameId', gameData.getServerId());
          url = url.replace('sessionCount', gameData.getSessionNumber());
          return connectionService.post(url, null);
        })
        .then(function (_data) {
          console.log(_data);
          $location.path(config.routes.managerManage);
        })
        .catch(function (_reason) {
          new Notification('Could not start Game: ' + _reason);
        });
    };
  });
