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

    var amountOfTypes = 6;

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

    var playerTypes = {
      'A': {
        type     : 'A',
        session1 : {
          role        : 'demander',
          maxValue    : 40
        },
        session2 : {
          role        : 'supplier',
          maxValue    : 30
        }
      },
      'B': {
        type     : 'B',
        session1 : {
          role        : 'demander',
          maxValue    : 20
        },
        session2 : {
          role        : 'supplier',
          maxValue    : 10
        }
      },
      'C': {
        type     : 'C',
        session1 : {
          role        : 'demander',
          maxValue    : 20
        },
        session2 : {
          role        : 'supplier',
          maxValue    : 40
        }
      },
      'D': {
        type     : 'D',
        session1 : {
          role        : 'supplier',
          maxValue    : 10
        },
        session2 : {
          role        : 'demander',
          maxValue    : 20
        }
      },
      'E': {
        type     : 'E',
        session1 : {
          role        : 'supplier',
          maxValue    : 30
        },
        session2 : {
          role        : 'demander',
          maxValue    : 40
        }
      },
      'F': {
        type     : 'F',
        session1 : {
          role        : 'supplier',
          maxValue    : 10
        },
        session2 : {
          role        : 'supplier',
          maxValue    : 30
        }
      }
    };

    var distributionAlgorithms = {
      'session1' : {
        'A' : {
          'low_cost_supplier'   : '2 * n',
          'high_cost_supplier'  : 'n',
          'low_value_demander'  : 'n + 2',
          'high_value_demander' : '2 * n'
        },
        'B' : {
          'low_cost_supplier'   : '2 * n',
          'high_cost_supplier'  : 'n',
          'low_value_demander'  : 'n + 2',
          'high_value_demander' : '2 * n + 1'
        },
        'C' : {
          'low_cost_supplier'   : '2 * n',
          'high_cost_supplier'  : 'n',
          'low_value_demander'  : 'n + 2',
          'high_value_demander' : '2 * n + 2'
        },
        'D' : {
          'low_cost_supplier'   : '2 * n + 1',
          'high_cost_supplier'  : 'n',
          'low_value_demander'  : 'n + 2',
          'high_value_demander' : '2 * n + 2'
        },
        'E' : {
          'low_cost_supplier'   : '2 * n + 1',
          'high_cost_supplier'  : 'n + 1',
          'low_value_demander'  : 'n + 1',
          'high_value_demander' : '2 * n + 2'
        },
        'F' : {
          'low_cost_supplier'   : '2 * n',
          'high_cost_supplier'  : 'n',
          'low_value_demander'  : 'n',
          'high_value_demander' : '2 * n'
        }
      },
      'session2' : {
        'A' : {
          'low_cost_supplier'   : 'n',
          'high_cost_supplier'  : '2 * n + 1',
          'low_value_demander'  : '2 * n',
          'high_value_demander' : 'n'
        },
        'B' : {
          'low_cost_supplier'   : 'n + 1',
          'high_cost_supplier'  : '2 * n + 1',
          'low_value_demander'  : '2 * n',
          'high_value_demander' : 'n'
        },
        'C' : {
          'low_cost_supplier'   : 'n + 1',
          'high_cost_supplier'  : '2 * n + 1',
          'low_value_demander'  : '2 * n + 1',
          'high_value_demander' : 'n'
        },
        'D' : {
          'low_cost_supplier'   : 'n + 1',
          'high_cost_supplier'  : '2 * n + 1',
          'low_value_demander'  : '2 * n + 1',
          'high_value_demander' : 'n + 1'
        },
        'E' : {
          'low_cost_supplier'   : 'n + 1',
          'high_cost_supplier'  : '2 * n + 1',
          'low_value_demander'  : '2 * n + 2',
          'high_value_demander' : 'n + 1'
        },
        'F' : {
          'low_cost_supplier'   : 'n',
          'high_cost_supplier'  : '2 * n',
          'low_value_demander'  : '2 * n',
          'high_value_demander' : 'n'
        }
      }
    };

    return {
      /**
       *
       * @param type
       * @returns {*}
       */
      getPlayerRule : function (type) {
        return playerTypes[type];
      },

      /**
       * Returns the player type distribution algorithms for session 1 and session 2.
       * @param _algorithmType
       * @returns {{session1: *, session2: *}}
       */
      getAlgorithms : function (_algorithmType) {
        return {'session1' : distributionAlgorithms.session1[_algorithmType], 'session2' : distributionAlgorithms.session2[_algorithmType]}
      },

      /**
       *
       * @returns {number}
       */
      getTypeCount : function () {
        return amountOfTypes;
      },

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
