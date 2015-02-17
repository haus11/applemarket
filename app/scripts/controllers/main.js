/*global config:false */

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

    if (serverId === undefined) {
      playerData.setIsGameManager(true);
      $location.path(config.routes.manager_create);
    }
    else {
      // Is GameManager
      gameData.setServerId(serverId);
      playerData.setIsGameManager(false);
      $location.path(config.routes.init_player);
    }

  });
