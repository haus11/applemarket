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

    var playerTypes = {
      A: {
        type    : 'A',
        session : {
          one : {
            id          : '1',
            role        : 'demander',
            maxValue    : 40,
            description : 'In this trading sessions you are an <strong>Apple Demander</strong>. Your <strong>Buyer Value is $40</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $40 - P</strong>. If you don\'t buy any apples' +
            ', your profit is 0.<br />' +
            'In the table below, if you bought apples, record the price that you paid and calculate your profits. ' +
            'If you did not buy any apples, mark an X for Price and record a Profit of 0.'
          },
          two : {
            id          : '2',
            role        : 'supplier',
            maxValue    : 30,
            description : 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is $30</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $P - 30</strong>. If you don\'t sell any apples,' +
            'your profit is 0.<br />' +
            'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
            'If you did not sell any apples, mark an X for Price and record a Profit of 0.'
          }
        }
      },
      B: {
        type    : 'B',
        session : {
          one : {
            id          : '1',
            role        : 'demander',
            maxValue    : 20,
            description : 'In this trading sessions you are an <strong>Apple Demander</strong>. Your <strong>Buyer Value is $20</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $20 - P</strong>. If you don\'t buy any apples' +
            ', your profit is 0.<br />' +
            'In the table below, if you bought apples, record the price that you paid and calculate your profits. ' +
            'If you did not buy any apples, mark an X for Price and record a Profit of 0.'
          },
          two : {
            id          : '2',
            role        : 'supplier',
            maxValue    : 10,
            description : 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is $10</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $P - 10</strong>. If you don\'t sell any apples,' +
            'your profit is 0.<br />' +
            'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
            'If you did not sell any apples, mark an X for Price and record a Profit of 0.'
          }
        }
      },
      C: {
        type    : 'C',
        session : {
          one : {
            id          : '1',
            role        : 'demander',
            maxValue    : 20,
            description : 'In this trading sessions you are an <strong>Apple Demander</strong>. Your <strong>Buyer Value is $20</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $20 - P</strong>. If you don\'t buy any apples' +
            ', your profit is 0.<br />' +
            'In the table below, if you bought apples, record the price that you paid and calculate your profits. ' +
            'If you did not buy any apples, mark an X for Price and record a Profit of 0.'
          },
          two : {
            id          : '2',
            role        : 'supplier',
            maxValue    : 40,
            description : 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is $40</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $P - 40</strong>. If you don\'t sell any apples,' +
            'your profit is 0.<br />' +
            'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
            'If you did not sell any apples, mark an X for Price and record a Profit of 0.'
          }
        }
      },
      D: {
        type    : 'D',
        session : {
          one : {
            id          : '1',
            role        : 'supplier',
            maxValue    : 10,
            description : 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is $10</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $P - 10</strong>. If you don\'t sell any apples,' +
            'your profit is 0.<br />' +
            'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
            'If you did not sell any apples, mark an X for Price and record a Profit of 0.'
          },
          two : {
            id          : '2',
            role        : 'demander',
            maxValue    : 20,
            description : 'In this trading sessions you are an <strong>Apple Demander</strong>. Your <strong>Buyer Value is $20</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $20 - P</strong>. If you don\'t buy any apples' +
            ', your profit is 0.<br />' +
            'In the table below, if you bought apples, record the price that you paid and calculate your profits. ' +
            'If you did not buy any apples, mark an X for Price and record a Profit of 0.'
          }
        }
      },
      E: {
        type    : 'E',
        session : {
          one : {
            id          : '1',
            role        : 'supplier',
            maxValue    : 30,
            description : 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is $30</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $P - 30</strong>. If you don\'t sell any apples,' +
            'your profit is 0.<br />' +
            'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
            'If you did not sell any apples, mark an X for Price and record a Profit of 0.'
          },
          two : {
            id          : '2',
            role        : 'demander',
            maxValue    : 40,
            description : 'In this trading sessions you are an <strong>Apple Demander</strong>. Your <strong>Buyer Value is $40</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $40 - P</strong>. If you don\'t buy any apples' +
            ', your profit is 0.<br />' +
            'In the table below, if you bought apples, record the price that you paid and calculate your profits. ' +
            'If you did not buy any apples, mark an X for Price and record a Profit of 0.'
          }
        }
      },
      F: {
        type    : 'F',
        session : {
          one : {
            id          : '1',
            role        : 'supplier',
            maxValue    : 10,
            description : 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is $10</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $P - 10</strong>. If you don\'t sell any apples,' +
            'your profit is 0.<br />' +
            'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
            'If you did not sell any apples, mark an X for Price and record a Profit of 0.'
          },
          two : {
            id          : '2',
            role        : 'supplier',
            maxValue    : 30,
            description : 'In this trading session your are an <strong>Apple Supplier</strong>. Your <strong>Seller Cost is $30</strong>.' +
            'If you buy a bushel of apples for price $P, your <strong>profit is $P - 30</strong>. If you don\'t sell any apples,' +
            'your profit is 0.<br />' +
            'In the table below, if you sold apples, record the price at which you sold your apples and calculate the profit you made.' +
            'If you did not sell any apples, mark an X for Price and record a Profit of 0.'
          }
        }
      }
    };



    return {
      getPlayerRule : function (type) {
        return playerTypes[type];
      }
    };
  });
