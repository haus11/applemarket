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
    var dataset = [];
    for (var i = 0; i < 25; ++i) {
      var newNumber = Math.floor(Math.random() * 30);
      dataset.push(newNumber);
    }

    var w = 500;
    var h = 150;
    var barPadding = 1;

    function calcDivGraph() {
      var divs = d3.select('#chartDiv').selectAll('#chartDiv');
        divs.data(dataset)
        .enter()
        .append('div')
        .attr('style', 'display: inline-block; width:25px; background-color:teal; margin-right: 2px;')
        .style('height', function(data) {
            var barHeight = data * 5;
            return barHeight + "px";
          });
    }

    function calcSvgGraph() {
      var svg = d3.select('#chartDiv').append('svg');
      svg.attr('width', w)
         .attr('height', h);

      var circles = svg.selectAll('circle')
                       .data(dataset)
                       .enter()
                       .append('circle');

      circles.attr('cx', function(d, i) {
        return (i * 50) + 25;
      })
        .attr('cy', h/2)
        .attr('r', function(d) {
          return d;
        })
        .attr('fill', 'yellow')
        .attr('stroke', 'orange')
        .attr('stroke-width', function(d) {
          return d/2;
        });

    }

    function calcBarChart() {
      var svg = d3.select('#chartDiv')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

      svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
          return i * (w / dataset.length);
        })
        .attr('y', function(d) {
          return h - d * 4;
        })
        .attr('width', w / dataset.length - barPadding)
        .attr('height', function (d) {
          return d * 4;
        })
        .attr('fill', function(d) {
          return 'rgb(0, 0, ' + (d * 10) + ')';
        });

      svg.selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .text(function(d) {
          return d;
        })
        .attr({
          x : function(d, i) { return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2; },
          y : function(d) { return h - (d * 4) + 14; },
          'font-family' : 'sans-serif',
          'font-size'   : '11px',
          fill          : 'white',
          'text-anchor' : 'middle'
        });
    }

    return {
      getSimpleDataDiv : function () {
       calcDivGraph();
      },
      getSimpleDataSvg : function () {
        calcSvgGraph();
      },
      getBarChart : function () {
        calcBarChart();
      }
    };
  });
