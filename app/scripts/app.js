/*global config */
/*global io */

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
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'angular.filter',
    'ngDialog'
  ])
  .config(function ($routeProvider, ngDialogProvider) {

    ngDialogProvider.setDefaults({
      className: 'ngdialog-theme-default',
      plain: false,
      showClose: false,
      closeByDocument: true,
      closeByEscape: true,
      appendTo: false
    });

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
      .when(config.routes.tradeSuccess, {
        templateUrl: 'views/trade/trade_succ.html',
        controller: 'TradeCtrl'
      })
      .when(config.routes.tradeFail, {
        templateUrl: 'views/trade/trade_fail.html',
        controller: 'TradeCtrl'
      })
      .when(config.routes.tradeAccept, {
        templateUrl: 'views/trade/trade_accept.html',
        controller: 'TradeCtrl'
      })
      .when(config.routes.managerCreate, {
        templateUrl: '/views/manager/create_game.html',
        controller: 'CreateGameCtrl'
      })
      .when(config.routes.managerManage, {
        templateUrl: '/views/manager/manage_game.html',
        controller: 'ManageGameCtrl'
      })
      .when(config.routes.lobby, {
        templateUrl: '../views/lobby.html',
        controller: 'LobbyCtrl'
      })
      .when(config.routes.join, {
        templateUrl: '../views/join.html',
        controller: 'JoinCtrl'
      })
      .when(config.routes.error, {
        templateUrl: 'views/error.html',
        controller: 'ErrorCtrl'
      })
      .otherwise({
        redirectTo: config.routes.error
      });
  })
  .run(function () {

  });
