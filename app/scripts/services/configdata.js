'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.configData
 * @description
 * # configData
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('configData', function () {

    var demanderText = 'In this trading sessions you are an <strong>Apple Demander</strong>. Your <strong>Buyer Value is ${0}</strong>.' +
      'If you buy a bushel of apples for price $P, your <strong>profit is ${0} - P</strong>. If you don\'t buy any apples' +
      ', your profit is 0.<br />' +
      'In the table below, if you bought apples, record the price that you paid and calculate your profits. ' +
      'If you did not buy any apples, mark an X for Price and record a Profit of 0.';

    var supplierText = 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is ${0}</strong>.' +
      'If you buy a bushel of apples for price $P, your <strong>profit is $P - {0}</strong>. If you don\'t sell any apples,' +
      'your profit is 0.<br />' +
      'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
      'If you did not sell any apples, mark an X for Price and record a Profit of 0.';


    return {
      /**
       *
       * @returns {string}
       */
      getDemanderText : function () {
        return demanderText;
      },

      /**
       *
       * @returns {string}
       */
      getSupplierText : function () {
        return supplierText;
      }
    };
  });
