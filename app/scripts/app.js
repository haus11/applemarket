'use strict';

/**
 * @ngdoc overview
 * @name applemarketApp
 * @description
 * # applemarketApp
 *
 * Main module of the application.
 */
angular
  .module('applemarketApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
