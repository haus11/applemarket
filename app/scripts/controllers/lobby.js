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
  .controller('LobbyCtrl', function ($scope, $location, playerData, gameData, connectionService, notificationService) {

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

      // join server and save game data and users list
      connectionService.put(apiAddress, payload)
        .then(function (_data) {
          $scope.lobbyData.gameName         = _data.game.name;
          $scope.lobbyData.playerList       = _data.game.user;
          // remove gamemanager from player list
          $scope.lobbyData.playerList.shift();
          $scope.lobbyData.playerMax        = _data.game.playerMax;
          $scope.lobbyData.numberOfPlayers  = _data.game.user.length;
          gameData.setNumberOfPlayers(_data.game.user.length);
          gameData.setGameName(_data.game.name);
          gameData.setPlayerMax(_data.game.playerMax);
          gameData.setPlayerList(_data.game.user);
          gameData.setPlayerId(_data.user.id);
        })
        .catch(function (_reason) {
          notificationService.notify($scope, 'Error joining Game', _reason);
        });

      // event game started
      connectionService.on(config.api.gameStarted, function () {
        gameData.setPlayerList($scope.lobbyData.playerList);
        gameData.setNumberOfPlayers($scope.numberOfPlayers);
        gameData.setGameStarted();
        $location.path(config.routes.offers);
      });
    }

    // Event: on player joins
    connectionService.on(config.api.playerJoined, function (_data) {
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
      // start game
      var url = config.api.gameStart.replace('id', gameData.getGameId());
      connectionService.put(url, null)
        .then(function () {
          //start new session
          return connectionService.post(config.api.sessionCreate, null);
        })
        .then(function (_data) {
          gameData.setSessionNumber(_data.count);
          // create new round
          return connectionService.post(config.api.roundCreate, null);
        })
        .then(function (_data) {
          gameData.setRoundNumber(_data.count);
          gameData.setPlayerList($scope.lobbyData.playerList);
          gameData.setNumberOfPlayers($scope.numberOfPlayers);
          gameData.setGameStarted();
          $location.path(config.routes.managerManage);
        })
        .catch(function (_reason) {
          notificationService.notify($scope, 'Could not start Game', _reason);
        });
    };
  });
