/*global config:false */

'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('NavigationCtrl', function ($scope, $rootScope, $location, playerData) {

    $scope.isGameManager = false;

    $rootScope.$on('onGameManagerSet', function() {
      $scope.isGameManager = playerData.isGameManager();
    });

    $scope.selectTab = function (_tabName) {

      $scope.selectedTab = _tabName;

      if (_tabName === config.nav.home) {
        window.location.href = config.api.sails;
      }
      else if (_tabName === config.nav.offers) {
        $location.path(config.routes.offers);
      }
      else if (_tabName === config.nav.profile) {
        $location.path(config.routes.profile);

      }
      else if (_tabName === config.nav.stats) {
        $location.path(config.routes.statistics);

      }
      else if (_tabName === config.nav.manager) {
        $location.path(config.routes.managerCreate);

      }
    };

  });
