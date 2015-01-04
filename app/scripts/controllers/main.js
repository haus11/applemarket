'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
