'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ManagersettingsCtrl
 * @description
 * # ManagersettingsCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('LobbyCtrl', function ($scope, $location, gameData, connectionService) {
    $scope.lobbyData =
    {
      'gameName'        : gameData.getGameName(),
      'playerMax'       : gameData.getPlayerMax(),
      'numberOfPlayers' : 0,
      'showInput'       : gameData.getGameName() == undefined
    };

    $scope.playerList = gameData.getPlayerList();

    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################

    // Event: on player joins
    connectionService.on(config.api.player_joined, function (_data) {

      $scope.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.playerList);

      //if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
      //  $scope.$apply();
      //}
    });

    // on player reconnects
    connectionService.on(config.api.player_reconnected, function (_data) {

      $scope.playerList.push(_data);
      $scope.lobbyData.numberOfPlayers++;
      gameData.setPlayerList($scope.playerList);

      //if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
      //  $scope.$apply();
      //}

    });

    // on player disconnects
    connectionService.on(config.api.player_leaved, function (_data) {
        console.log('UserDisconnect');

        for (var i = 0; i < $scope.playerList.length; i++) {
            if ($scope.playerList[i].id == _data.id) {
                $scope.playerList.splice(i, 1);
                $scope.lobbyData.numberOfPlayers--;
                gameData.setPlayerList($scope.playerList);
                break;
            }
        }
    });

    // on player data changes
    connectionService.on(config.api.user_update, function (_data) {

      for (var i = 0; i < $scope.playerList.length; i++) {
        if ($scope.playerList[i].id == _data.id) {
          $scope.playerList[i] = _data;
          gameData.setPlayerList($scope.playerList);
          break;
        }
      }
    });

    $scope.startGame = function () {
      var url = config.api.game_start.replace("id", gameData.getServerId());
      console.log(url);

      connectionService.put(url, null, function (_data, _jwres) {

        console.log(_data);
        console.log(_jwres);

        $location.path(config.routes.manager_manage);
      });
    };
  });
