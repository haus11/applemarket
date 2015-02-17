/*jshint -W061 */
/*jshint unused:false*/

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
          'lowCostSupplier'   : eval(algorithms.session1.lowCostSupplier),
          'highCostSupplier'  : eval(algorithms.session1.highCostSupplier),
          'lowValueDemander'  : eval(algorithms.session1.lowValueDemander),
          'highValueDemander' : eval(algorithms.session1.highValueDemander)
        },
        'session2': {
          'lowCostSupplier'   : eval(algorithms.session2.lowCostSupplier),
          'highCostSupplier'  : eval(algorithms.session2.highCostSupplier),
          'lowValueDemander'  : eval(algorithms.session2.lowValueDemander),
          'highValueDemander' : eval(algorithms.session2.highValueDemander)
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
       *                 'lowCostSupplier'   : 2,
       *                 'highCostSupplier'  : 2,
       *                 'lowValueDemander'  : 2,
       *                 'highValueDemander' : 2
       *               },
       *  'session2' : {
       *                 'lowCostSupplier'   : 2,
       *                 'highCostSupplier'  : 2,
       *                 'lowValueDemander'  : 2,
       *                 'highValueDemander' : 2
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
