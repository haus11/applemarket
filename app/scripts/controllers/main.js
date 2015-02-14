'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, playerData, gameData) {

    var serverId = $location.search().server_id;
    $location.$$search = {};

    if (serverId == undefined) {
      playerData.setIsGameManager(true);
      $rootScope.$broadcast('onGameManagerSet');
      $location.path(config.routes.game_manager);
    }
    else {
      // Is GameManager
      gameData.setServerId(serverId);
      playerData.setIsGameManager(false);
      $location.path(config.routes.init_player);
    }

  });
