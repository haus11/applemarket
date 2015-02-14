'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('MainCtrl', function ($scope, $location, playerData, gameData) {

    var serverId = $location.search().server_id;

    // Is GameManager
    if (serverId == undefined) {
      playerData.setIsGameManager(true);
      $location.path(config.routes.game_manager);
    }
    else {
      gameData.setServerId(serverId);
      $location.path(config.routes.init_player);
    }

  });
