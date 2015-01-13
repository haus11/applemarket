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
    'ui.bootstrap',
    'ngSanitize',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $locationProvider) {
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
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/offers', {
        templateUrl: 'views/offers.html',
        controller: 'OffersCtrl'
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl'
      })
      .when('/simpleChart', {
        templateUrl: 'views/simplechart.html',
        controller: 'SimplechartCtrl'
      })
      .when('/trade', {
        templateUrl: 'views/trade.html',
        controller: 'TradeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
