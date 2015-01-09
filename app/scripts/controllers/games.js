'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('GamesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
