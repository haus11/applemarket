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

    var gameName        = 'Apple123';
    var sessionNumber   = 0;
    var roundNumber     = 0;
    var time            = 0;  // in minutes

    return {

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
      }
    };
  });
