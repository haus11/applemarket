'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('MainCtrl', function ($scope, $location) {

    var serverId = $location.search().server_id;

    // Is GameManager
    if (serverId != undefined) {
      playerData.setIsGameManager(true);
    }

    $location.path('/gamemanager');

  });
