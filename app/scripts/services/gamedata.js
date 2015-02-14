'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.playerData
 * @description
 * # playerData
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('gameData', function ($rootScope) {

    var gameStarted     = false;
    var gameName        = undefined;
    var sessionNumber   = undefined;
    var roundNumber     = undefined;
    var time            = undefined;  // in minutes
    var serverId        = undefined;

    return {

      isGameStarted : function () {
        return gameStarted;
      },

      setGameStarted : function (_gameStarted) {
        gameStarted = _gameStarted;
      },

      getGameName : function () {
        return gameName;
      },

      setGameName : function (_gameName) {
        gameName = _gameName;
        $rootScope.$broadcast('onGameDataChange');
      },

      getSessionNumber : function () {
        return sessionNumber;
      },

      setSessionNumber : function (_sessionNumber) {
        sessionNumber = _sessionNumber;
        $rootScope.$broadcast('onGameDataChange');
      },

      getRoundNumber : function () {
        return roundNumber;
      },

      setRoundNumber : function (_roundNumber) {
        roundNumber = _roundNumber;
        $rootScope.$broadcast('onGameDataChange');
      },

      getTime : function () {
        return time;
      },

      setTime : function (_time) {
        time = _time;
        $rootScope.$broadcast('onGameDataChange');
      },

      getServerId : function () {
        return serverId;
      },

      setServerId : function (_serverId) {
        serverId = _serverId;
      }
    };
  });
