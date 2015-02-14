'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.playerData
 * @description
 * # playerData
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('playerData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var playerName    = undefined;
    var isDemander    = true; // later get it from configdata
    var isGameManager;
    var startPrice    = 20.0;
    var customPrice   = 23.0;

    return {

      getPlayerName : function () {
        return playerName;
      },

      setPlayerName : function (_playerName) {
        playerName = _playerName;
      },

      isDemander : function () {
        return isDemander;
      },

      setIsDemander : function (_demander) {
        isDemander = _demander;
      },

      isGameManager : function () {
        return isGameManager;
      },

      setIsGameManager : function (_gameManager) {
        isGameManager = _gameManager;
      },

      getStartPrice : function () {
        return startPrice;
      },

      setStartPrice : function (_startPrice) {
        startPrice = _startPrice;
      },

      getCustomPrice : function () {
        return customPrice;
      },

      setCustomPrice : function (_customPrice) {
        customPrice = _customPrice;
      }
    };
  });
