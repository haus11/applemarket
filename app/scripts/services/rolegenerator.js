'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.roleGenerator
 * @description
 * # roleGenerator
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('roleGenerator', function (configData) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function calculate (_amountOfPlayers) {

      // The variable 'n' is needed for the distribution algorithms, because inside those algorithms the amount of
      // full sets is indicated by the 'n' variable.
      var n             = Math.floor(_amountOfPlayers / configData.getTypeCount());
      var remainder     = _amountOfPlayers % configData.getTypeCount();
      var algorithmType = getAlgorithmTypeByRemainder(remainder);
      var algorithms    = configData.getAlgorithms(algorithmType);

      return {
        'session1': {
          'low_cost_supplier'   : eval(algorithms.session1.low_cost_supplier),
          'high_cost_supplier'  : eval(algorithms.session1.high_cost_supplier),
          'low_value_demander'  : eval(algorithms.session1.low_value_demander),
          'high_value_demander' : eval(algorithms.session1.high_value_demander)
        },
        'session2': {
          'low_cost_supplier'   : eval(algorithms.session2.low_cost_supplier),
          'high_cost_supplier'  : eval(algorithms.session2.high_cost_supplier),
          'low_value_demander'  : eval(algorithms.session2.low_value_demander),
          'high_value_demander' : eval(algorithms.session2.high_value_demander)
        }
      };
    }

    /**
     * Returns the algorithm type based on the calculated remainder of people.
     *
     * @param _remainder
     * @returns {string}
     */
    function getAlgorithmTypeByRemainder (_remainder) {
      var result = 'F';

      switch (_remainder) {
        case 1: result = 'A'; break;
        case 2: result = 'B'; break;
        case 3: result = 'C'; break;
        case 4: result = 'D'; break;
        case 5: result = 'E'; break;
        default: result = 'F';
      }

      return result;
    }

    return {

      /**
       * Returns an even distribution of the various player types.
       *
       * Output: {
       *  'session1' : {
       *                 'low_cost_supplier'   : 2,
       *                 'high_cost_supplier'  : 2,
       *                 'low_value_demander'  : 2,
       *                 'high_value_demander' : 2
       *               },
       *  'session2' : {
       *                 'low_cost_supplier'   : 2,
       *                 'high_cost_supplier'  : 2,
       *                 'low_value_demander'  : 2,
       *                 'high_value_demander' : 2
       *               },
       * }
       *
       * @param _amountOfPlayers
       */
      generateTypeDistribution : function (_amountOfPlayers) {
        return calculate(_amountOfPlayers);
      }

    };
  });
