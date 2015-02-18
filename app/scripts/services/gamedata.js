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
    var gameName;
    var sessionNumber     = 0;
    var maxSessionNumber  = 2;
    var roundNumber       = 0;
    var maxRoundNumber    = 2;
    var gameId;
    var playerMax;
    var numberOfPlayers   = 0;
    var playerList        = [];
    var gameFinished      = false;
    var playerId;

    return {

      isGameStarted : function () {
        return gameStarted;
      },

      setGameStarted : function () {
        gameStarted = true;
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

      increaseSessionNumber : function () {
        sessionNumber++;
        $rootScope.$broadcast('onGameDataChange');
      },

      setMaxSessionNumber : function (_maxSessionNumber) {
        maxSessionNumber = _maxSessionNumber;
        $rootScope.$broadcast('onGameDataChange');
      },

      resetSessionNumber : function () {
        sessionNumber = 1;
        $rootScope.$broadcast('onGameDataChange');
      },

      getRoundNumber : function () {
        return roundNumber;
      },

      getMaxRoundNumber : function () {
        return maxRoundNumber;
      },

      increaseRoundNumber : function () {
        roundNumber++;
        $rootScope.$broadcast('onGameDataChange');
      },

      resetRoundNumber : function () {
        roundNumber = 1;
        $rootScope.$broadcast('onGameDataChange');
      },

      setMaxRoundNumber : function (_maxRoundNumber) {
        maxRoundNumber = _maxRoundNumber;
        $rootScope.$broadcast('onGameDataChange');
      },

      getGameId : function () {
        return gameId;
      },

      setGameId : function (_gameId) {
        gameId = _gameId;
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

      setNumberOfPlayers : function (_numberOfPlayers) {
        numberOfPlayers = _numberOfPlayers;
      },

      getNumberOfPlayers : function () {
        return numberOfPlayers;
      },

      getPlayerList : function () {
        return playerList;
      },

      setGameFinished : function () {
        gameFinished = true;
      },

      isGameFinished : function () {
        return gameFinished;
      },

      setPlayerId : function (_playerId) {
        playerId = _playerId;
      },

      getPlayerId : function () {
        return playerId;
      }
    };
  });
