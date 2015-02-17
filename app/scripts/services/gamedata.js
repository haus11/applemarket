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

    var gameStarted       = false;
    var gameName          = undefined;
    var sessionNumber     = 0;
    var maxSessionNumber  = 2;
    var roundNumber       = 0;
    var maxRoundNumber    = 2;
    var serverId          = undefined;
    var playerMax         = undefined;
    var numberOfPlayers   = undefined;
    var playerList        = [];

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

      getMaxSessionNumber : function () {
        return maxSessionNumber;
      },

      setSessionNumber : function (_sessionNumber) {
        sessionNumber = _sessionNumber;
        $rootScope.$broadcast('onGameDataChange');
      },

      setMaxSessionNumber : function (_maxSessionNumber) {
        maxSessionNumber = _maxSessionNumber;
        $rootScope.$broadcast('onGameDataChange');
      },

      getRoundNumber : function () {
        return roundNumber;
      },

      getMaxRoundNumber : function () {
        return maxRoundNumber;
      },

      setRoundNumber : function (_roundNumber) {
        roundNumber = _roundNumber;
        $rootScope.$broadcast('onGameDataChange');
      },

      setMaxRoundNumber : function (_maxRoundNumber) {
        maxRoundNumber = _maxRoundNumber;
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
