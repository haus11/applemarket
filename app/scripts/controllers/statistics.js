'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('StatisticsCtrl', function ($scope, simpleChart, connectionService) {

    var numberOfBarsDrawn = 5;

    // -----------------------------------------------------------------------------
    // establish socket connection
    // -----------------------------------------------------------------------------
    connectionService.get('/api/apple/transactions', function(data, jwres) {

      // draw first set of bars
      $scope.respBarChart  = simpleChart.drawBarChart(numberOfBarsDrawn, data);

      // -----------------------------------------------------------------------------
      // navigate through the statistics
      // -----------------------------------------------------------------------------
      $scope.clickedPreviousStatistics = function(){
        $scope.resBarChart = simpleChart.controlBarChart('left');
      };
      $scope.clickedNextStatistics = function(){
        $scope.resBarChart = simpleChart.controlBarChart('right');
      };
    });
  });
