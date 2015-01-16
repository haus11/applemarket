'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:SimplechartCtrl
 * @description
 * # SimplechartCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('SimplechartCtrl', function ($scope, simpleChart) {
    //$scope.simpleGraph = simpleChart.getSimpleDataSvg();
    $scope.barChart    = simpleChart.getApplePlot();
  });
