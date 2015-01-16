'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.playerData
 * @description
 * # playerData
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('playerData', function ($cacheFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var CACHE_NAME        = 'playerName';
    var CACHE_STUDENT_ID  = 'studentId';

    var cache = $cacheFactory('appleMarketCache');

    var playerName = cache.get(CACHE_NAME);
    var studentId  = cache.get(CACHE_STUDENT_ID);

    return {

      getPlayerName : function () {
        return playerName;
      },

      setPlayerName : function (_playerName) {
        playerName = _playerName;
        cache.put(CACHE_NAME, _playerName);
      },

      getStudentId : function () {
        return studentId;
      },

      setStudentId : function (_studentId) {
        studentId = _studentId;
        cache.put(CACHE_STUDENT_ID, _studentId);
      }

    };
  });
