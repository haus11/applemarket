'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('StatisticsCtrl', function ($scope, simpleChart) {

    var numberOfBarsDrawn = 5;

    $scope.respBarChart  = simpleChart.drawBarChart(numberOfBarsDrawn);


    $scope.clickedPreviousStatistics = function(){
      $scope.resBarChart = simpleChart.controlBarChart('left');
    };
    $scope.clickedNextStatistics = function(){
      $scope.resBarChart = simpleChart.controlBarChart('right');
    };
  });
