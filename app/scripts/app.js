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
    'pascalprecht.translate',
    'angular.filter'
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
        templateUrl: 'views/trade/trade.html',
        controller: 'TradeCtrl'
      })
      .when('/trade/success', {
        templateUrl: 'views/trade/trade_succ.html',
        controller: 'TradeCtrl'
      })
      .when('/trade/fail', {
        templateUrl: 'views/trade/trade_fail.html',
        controller: 'TradeCtrl'
      })
      .when('/trade/accept', {
        templateUrl: 'views/trade/trade_accept.html',
        controller: 'TradeCtrl'
      })
      .when('/manager/create-game', {
        templateUrl: '/views/manager/create_game.html',
        controller: 'CreateGameCtrl'
      })
      .when('/manager/start-game', {
        templateUrl: '/views/manager/start_game.html',
        controller: 'StartGameCtrl'
      })
      .when('/manager/manage-game', {
        templateUrl: '/views/manager/manage_game.html',
        controller: 'ManageGameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
