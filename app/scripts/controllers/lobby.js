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
    // Player
    if (!$scope.isGameManager) {
      // Join Game if player is not game manager

      var apiAddress = config.api.serverJoin.replace(':gameId', gameData.getGameId());
      var payload = {
        'username' : playerData.getPlayerName(),
        'gameID'   : gameData.getGameId()
      };

      // save game data and users list
      connectionService.put(apiAddress, payload)
        .then(function (_data) {
          $scope.lobbyData.gameName         = _data.game.name;
          $scope.lobbyData.playerList       = _data.game.user;
          $scope.lobbyData.playerMax        = _data.game.playerMax;
          $scope.lobbyData.numberOfPlayers  = _data.game.user.length - 1;
          console.log($scope.lobbyData.playerList);
          gameData.setNumberOfPlayers(_data.game.user.length - 1);
          gameData.setPlayerMax(_data.game.playerMax);
          gameData.setPlayerList(_data.game.user);
          gameData.setPlayerId(_data.user.id);
        })
        .catch(function (_reason) {
          new Notification('Error joining Game: ' + _reason);
        });

      // event game started
      connectionService.on(config.api.gameStarted, function () {
        gameData.setPlayerList($scope.lobbyData.playerList);
        gameData.setNumberOfPlayers($scope.numberOfPlayers);
        gameData.increaseRoundNumber();
        gameData.increaseSessionNumber();
        gameData.setGameStarted();
        $location.path(config.routes.offers);
      });
    }

    // Event: on player joins
    connectionService.on(config.api.playerJoined, function (_data) {
      console.log('Player Joined');
      $scope.lobbyData.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.lobbyData.playerList);
      gameData.setNumberOfPlayers($scope.numberOfPlayers);

      //if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
      //  $scope.$apply();
      //}
    });

    // on player reconnects
    connectionService.on(config.api.playerReconnected, function (_data) {

      $scope.lobbyData.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.lobbyData.playerList);
      gameData.setNumberOfPlayers($scope.numberOfPlayers);

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
          gameData.setNumberOfPlayers($scope.numberOfPlayers);
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
      connectionService.put(url, null)
        .then(function () {
          gameData.increaseSessionNumber();

          url = config.api.sessionCreate.replace('gameId', gameData.getGameId());
          return connectionService.post(url, null);
        })
        .then(function () {
          gameData.resetRoundNumber();
          url = config.api.roundCreate.replace('gameId', gameData.getGameId());
          url = url.replace('sessionCount', gameData.getSessionNumber());
          return connectionService.post(url, null);
        })
        .then(function () {
          gameData.setPlayerList($scope.lobbyData.playerList);
          gameData.setNumberOfPlayers($scope.numberOfPlayers);
          gameData.setGameStarted();
          $location.path(config.routes.managerManage);
        })
        .catch(function (_reason) {
          new Notification('Could not start Game: ' + _reason);
        });
    };
  });
