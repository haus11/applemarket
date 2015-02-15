'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:ManagersettingsCtrl
 * @description
 * # ManagersettingsCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('LobbyCtrl', function ($scope, gameData, connectionService) {
    $scope.inputData =
    {
      'gameName'      : gameData.getGameName(),
      'sessionNumber' : 0,
      'roundNumber'   : 0,
      'timeLeft'      : 0,
      'slots'         : 0,
      'showInput'     : gameData.getGameName() == undefined
    };

    $scope.playerList = [];

    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################

    // Event: on player joins
    connectionService.on(config.api.player_joined, function (_data) {

      console.log(_data);
      $scope.playerList.push(_data);

      gameData.setPlayerList($scope.playerList);
      $scope.apply();
      console.log(gameData.getPlayerList());
    });

    // on player reconnects
    connectionService.on(config.api.player_reconnected, function (_data) {

      $scope.playerList.push(_data);
      //gameData.setPlayerList($scope.playerList);
      $scope.apply();
    });

    // on player disconnects
    connectionService.on(config.api.player_leaved, function (_data) {
        console.log('UserDisconnect');

        for (var i = 0; i < $scope.playerList.length; i++) {
            if ($scope.playerList[i].id == _data.id) {
                $scope.playerList.splice(i, 1);
                //gameData.setPlayerList($scope.playerList);
                break;
            }
        }
    });

    // on player data changes
    connectionService.on(config.api.user_update, function (_data) {

      for (var i = 0; i < $scope.playerList.length; i++) {
        if ($scope.playerList[i].id == _data.id) {
          $scope.playerList[i] = _data;
          //gameData.setPlayerList($scope.playerList);
          break;
        }
      }
    });
  });
