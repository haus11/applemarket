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
  .controller('LobbyCtrl', function ($scope, $location, playerData, gameData, connectionService, Notification) {

    $scope.lobbyData =
    {
      gameName        : gameData.getGameName(),
      playerMax       : gameData.getPlayerMax(),
      numberOfPlayers : 0,
      playerList      : gameData.getPlayerList()
    };

    $scope.isGameManager = playerData.isGameManager();


    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################

    // Join server if player is not game manager
    if (!$scope.isGameManager) {
      var apiAddress = config.api.serverJoin.replace(':gameId', gameData.getGameId());
      var payload = {
        'username' : playerData.getPlayerName(),
        'gameID'   : gameData.getGameId()
      };

      connectionService.put(apiAddress, payload)
        .then(function (_data) {
          $scope.lobbyData.playerList      = _data.user;
          $scope.lobbyData.playerMax       = _data.playerMax;
          $scope.lobbyData.numberOfPlayers = _data.user.length;
        })
        .catch(function (_reason) {
          Notification('Error joining server: ' + _reason);
        });
    }

    // Event: on player joins
    connectionService.on(config.api.playerJoined, function (_data) {

      $scope.lobbyData.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.lobbyData.playerList);

      //if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
      //  $scope.$apply();
      //}
    });

    // on player reconnects
    connectionService.on(config.api.playerReconnected, function (_data) {

      $scope.lobbyData.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.lobbyData.playerList);

      //if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
      //  $scope.$apply();
      //}

    });

    // on player disconnects
    connectionService.on(config.api.playerLeaved, function (_data) {
      console.log('UserDisconnect');

      for (var i = 0; i < $scope.lobbyData.playerList.length; i++) {
          if ($scope.lobbyData.playerList[i].id === _data.id) {
              $scope.lobbyData.playerList.splice(i, 1);
              $scope.lobbyData.numberOfPlayers--;
              gameData.setPlayerList($scope.lobbyData.playerList);
              break;
          }
      }
    });

    // on player data changes
    connectionService.on(config.api.userUpdate, function (_data) {

      for (var i = 0; i < $scope.lobbyData.playerList.length; i++) {
        if ($scope.lobbyData.playerList[i].id === _data.id) {
          $scope.lobbyData.playerList[i] = _data;
          gameData.setPlayerList($scope.lobbyData.playerList);
          break;
        }
      }
    });

    $scope.startGame = function () {
      var url = config.api.gameStart.replace('id', gameData.getGameId());
      console.log(url);

      connectionService.put(url, null)
        .then(function (_data) {

          console.log(_data);
          $location.path(config.routes.managerManage);
        })
        .catch(function (_reason) {
          console.log(_reason);
        });
    };
  });
