'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.simpleChart
 * @description
 * # simpleChart
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('simpleChart', function () {
    var dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3];

    function calcGraph() {
      console.log(d3);
      var divs = d3.select('#chartDiv').selectAll('#chartDiv');
      console.log(divs);
        divs.data(dataset)
        .enter()
        .append('div')
        .attr('style', 'display: inline-block; width:25px; background-color:teal; margin-right: 2px;')
        .style('height', function(data) {
            var barHeight = data * 5;
            return barHeight + "px";
          });
    }

    return {
      getSimpleData : function () {
       calcGraph();
      }
    };
  });
