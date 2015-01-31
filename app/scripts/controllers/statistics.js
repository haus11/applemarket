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
    $scope.respBarChart  = simpleChart.getBostock(5);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
