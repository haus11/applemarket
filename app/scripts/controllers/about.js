'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
