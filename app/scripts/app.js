'use strict';

/**
 * @ngdoc overview
 * @name applemarketApp
 * @description
 * # applemarketApp
 *
 * Main module of the application.
 */

io.sails.autoConnect = false;

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

    //$locationProvider.html5Mode({
    //  enabled: true,
    //  requireBase: false
    //});

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
      .when('/gamemanager', {
        templateUrl: 'views/gamemanager.html',
        controller: 'GamemanagerCtrl'
      })
      .when('/gamemanager/settings', {
        templateUrl: 'views/managersettings.html',
        controller: 'ManagersettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location, playerData, connectionService) {


    //connectionService.on(config.api.connect, function () {
    //  console.log('Connect');
    //  connectionService.post(config.api.authenticate, function (_data, _jwres) {
    //    console.log('Authenticate');
    //    console.log(_data);
    //
    //    if (Object.keys(_data).length === 0) {
    //      // ask for name
    //      // create user on /user POST
    //      $location.path('/createUser');
    //    }
    //    else {
    //      // get data from session
    //      userService.setAlias(_data.username);
    //      userService.setUserName(_data.username);
    //
    //      $location.path('/chatRoom');
    //    }
    //
    //    $rootScope.$apply();
    //  });
    //});
  });

