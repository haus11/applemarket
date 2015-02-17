/*jshint unused:false*/

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
    var gameName;
    var sessionNumber;
    var roundNumber;
    var time;  // in minutes
    var serverId;
    var playerMax;
    var numberOfPlayers;
    var playerList      = [];

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
      },

      getPlayerMax : function () {
        return playerMax;
      },

      setPlayerMax : function (_playerMax) {
        playerMax = _playerMax;
      },

      setPlayerList : function (_playerList) {
        playerList = _playerList;
      },

      getPlayerList : function () {
        return playerList;
      }
    };
  });
