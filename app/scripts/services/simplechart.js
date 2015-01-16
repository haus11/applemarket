'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.simpleChart
 * @description
 * # Tests with the chart possibilities in d3.js
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('simpleChart', function () {
    var dataset = [];
    for (var i = 0; i < 25; ++i) {
      var newNumber = Math.floor(Math.random() * 30);
      dataset.push(newNumber);
    }
    var barPadding = 1;
    var padding = 30;

    function calcDivGraph() {
      var w = 500;
      var h = 300;
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
      var w = 500;
      var h = 300;
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
      var w = 500;
      var h = 150;
      var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([0, w], 0.05);

      var yScale = d3.scale.linear()
        .domain([0, d3.max(dataset)])
        .range([0, h]);

      var svg = d3.select('#barChartDiv')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

      svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
          return xScale(i);
        })
        .attr('y', function(d) {
          return h - yScale(d);
        })
        .attr('width', xScale.rangeBand())
        .attr('height', function(d) { return yScale(d);})
        .attr('fill', function(d) {
          return 'rgb(0, 0, ' + (d * 10) + ')';
        });

      svg.selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .text(function(d) { return d; })
        .attr({
          x : function(d, i) { return xScale(i) + xScale.rangeBand() / 2; },
          y : function(d)    { return h - yScale(d) + 14; },
          'font-family' : 'sans-serif',
          'font-size'   : '11px',
          fill          : 'white',
          'text-anchor' : 'middle'
        });
    }

    function calcApplePlot() {
      var w = 500;
      var h = 300;
      var appleData = [];
      var numDataPoints = 50;
      var xRange = Math.random() * 1000;
      var yRange = Math.random() * 1000;
      for (var i = 0; i < numDataPoints; ++i) {
        var newNumber1 = Math.floor(Math.random() * xRange);
        var newNumber2 = Math.floor(Math.random() * yRange);
        appleData.push([newNumber1, newNumber2]);
      }

      var xScale = d3.scale.linear()
                           .domain([0, d3.max(appleData, function(d) { return d[0]; })])
                           .range ([padding, w - padding * 2]);

      var yScale = d3.scale.linear()
                           .domain([0, d3.max(appleData, function(d) { return d[1]; })])
                           .range ([h - padding, padding]);

      var rScale = d3.scale.linear()
                     .domain([0, d3.max(appleData, function(d) { return d[1]; })])
                     .range([2, 5]);

      var formatAsPercentage = d3.format('0.1%');

      var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient('bottom')
                        .ticks(5)
                        .tickFormat(formatAsPercentage);

      var yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient('left')
                        .ticks(5);

      var svg = d3.select('#scatterplotDiv')
                  .append('svg')
                  .attr('width', w)
                  .attr('height', h);

      svg.selectAll('circle')
        .data(appleData)
        .enter()
        .append('circle')
        .attr('cx', function(d) { return xScale(d[0]); })
        .attr('cy', function(d) { return yScale(d[1]); })
        .attr('r',  function(d) { return rScale(d[1]); });

      //svg.selectAll('text')
      //  .data(appleData)
      //  .enter()
      //  .append('text')
      //  .text(function(d) { return d[0] + ',' + d[1]; })
      //  .attr('x', function(d) { return xScale(d[0]); })
      //  .attr('y', function(d) { return yScale(d[1]); })
      //  .attr('font-family', 'sans-serif')
      //  .attr('font-size', '11px')
      //  .attr('fill', 'red');

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + (h-padding) + ')')
        .call(xAxis);
      var y = svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + (padding) + ',0)')
        .call(yAxis);
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
      },
      getApplePlot : function () {
        calcApplePlot();
      }
    };
  });
