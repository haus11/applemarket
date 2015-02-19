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

    var numberOfBarsDrawn = 15;

    // -----------------------------------------------------------------------------
    // establish socket connection
    // -----------------------------------------------------------------------------
    connectionService.get(config.api.completedTransactions)
      .then(function(data) {

        console.log(data);
        // draw first set of bars
        $scope.respBarChart  = simpleChart.drawBarChart(numberOfBarsDrawn, data);

        // -----------------------------------------------------------------------------
        // navigate through the statistics
        // -----------------------------------------------------------------------------
        $scope.clickedPreviousStatistics = function () {
          $scope.resBarChart = simpleChart.controlBarChart('left');
        };
        $scope.clickedNextStatistics = function () {
          $scope.resBarChart = simpleChart.controlBarChart('right');
        };
      })
      .catch(function (_reason) {
        console.log(_reason);
      });

    connectionService.on(config.api.transactionUpdate, function (_data) {

      console.log(_data);
      $scope.respBarChart  = simpleChart.updateBarChart(_data);
    });
  });
