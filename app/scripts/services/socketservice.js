/*global config*/

'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.socketService
 * @description
 * # socketService
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('socketService', function ($rootScope, connectionService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // a new round is started
    connectionService.on(config.api.roundCreated, function (_data) {
      $rootScope.$broadcast(config.bc.onNewRound, _data);
    });

    // a new session is started
    connectionService.on(config.api.sessionCreated, function (_data) {
      $rootScope.$broadcast(config.bc.onNewSession, _data);
    });

    // game finished
    connectionService.on(config.api.gameFinished, function (_data) {
      $rootScope.$broadcast(config.bc.onGameFinished, _data);
    });

    // when a new offer is created
    connectionService.on(config.api.offerCreated, function (_data) {
      $rootScope.$broadcast(config.bc.onOfferCreated, _data);
    });

    // when transaction is updated
    connectionService.on(config.api.trade_created, function (_data) {
      $rootScope.$broadcast(config.bc.onTradeCreated, _data);
    });

    connectionService.on(config.api.trade_accepted, function (_data) {
      $rootScope.$broadcast(config.bc.onTradeAccepted, _data);
    });

    connectionService.on(config.api.trade_updated, function (_data) {
      $rootScope.$broadcast(config.bc.onTradeUpdated, _data);
    });

    return {

    };
  });
