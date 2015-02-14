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
      .when(config.routes.base, {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when(config.routes.profile, {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when(config.routes.offers, {
        templateUrl: 'views/offers.html',
        controller: 'OffersCtrl'
      })
      .when(config.routes.statistics, {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl'
      })
      .when(config.routes.trade, {
        templateUrl: 'views/trade/trade.html',
        controller: 'TradeCtrl'
      })
      .when(config.routes.trade_success, {
        templateUrl: 'views/trade/trade_succ.html',
        controller: 'TradeCtrl'
      })
      .when(config.routes.trade_fail, {
        templateUrl: 'views/trade/trade_fail.html',
        controller: 'TradeCtrl'
      })
      .when(config.routes.trade_accept, {
        templateUrl: 'views/trade/trade_accept.html',
        controller: 'TradeCtrl'
      })
<<<<<<< HEAD
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
=======
      .when(config.routes.game_manager, {
        templateUrl: 'views/gamemanager.html',
        controller: 'GamemanagerCtrl'
      })
      .when(config.routes.lobby, {
        templateUrl: '../views/lobby.html',
        controller: 'LobbyCtrl'
      })
      .when(config.routes.init_player, {
        templateUrl: 'views/initplayer.html',
        controller: 'InitplayerCtrl'
>>>>>>> af3c1ce1ef2678e29c5378c20b54cefc3f6bc1b9
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

