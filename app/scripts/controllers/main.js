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
  .controller('MainCtrl', function ($scope, $rootScope, $location, playerData) {

    // If game manager sate has already been set (user has joined a game before)
    if (!playerData.isGameManager()) {
      $location.path(config.routes.error);
    }
    else {
      playerData.setIsGameManager(true);
      $location.path(config.routes.managerCreate);
    }
  });
