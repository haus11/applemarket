'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.playerData
 * @description
 * # playerData
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('gameData', function () {

    var gameName        = 'Apple123';
    var sessionNumber   = 0;
    var roundNumber     = 0;
    var time            = 0;

    return {

      getGameName : function () {
        return gameName;
      },

      setGameName : function (_gameName) {
        gameName = _gameName;
      },

      getSessionNumber : function () {
        return sessionNumber;
      },

      setSessionNumber : function (_sessionNumber) {
        sessionNumber = _sessionNumber;
      },

      getRoundNumber : function () {
        return roundNumber;
      },

      setRoundNumber : function (_roundNumber) {
        roundNumber = _roundNumber;
      },

      getTime : function () {
        return time;
      },

      setTime : function (_time) {
        time = _time;
      }
    };
  });
