'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.playerData
 * @description
 * # playerData
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('playerData', function (appCache) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var CACHE_NAME        = 'playerName';
    var CACHE_STUDENT_ID  = 'studentId';
    //
    //var playerName = appCache.get(CACHE_NAME);
    //var studentId  = appCache.get(CACHE_STUDENT_ID);
    var playerName = undefined;
    var studentId  = 1234 //undefined;

    return {

      getPlayerName : function () {
        return playerName;
      },

      setPlayerName : function (_playerName) {
        playerName = _playerName;
        //appCache.put(CACHE_NAME, _playerName);
      },

      getStudentId : function () {
        return studentId;
      },

      setStudentId : function (_studentId) {
        studentId = _studentId;
        //appCache.put(CACHE_STUDENT_ID, _studentId);
      }

    };
  });
