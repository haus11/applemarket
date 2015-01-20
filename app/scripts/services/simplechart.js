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
            return barHeight + 'px';
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

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + (h-padding) + ')')
        .call(xAxis);
      var y = svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + (padding) + ',0)')
        .call(yAxis);
    }

    function calcResponsiveBarChart() {

      var data = [];
      for (var i = 0; i < 25; ++i) {
        var newNumber = Math.floor(Math.random() * 30);
        data.push(newNumber);
      }

      var w = $('#respBarChart').width()
        , aspect = 9/16;

      var h = w * aspect;
      var xScale = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeRoundBands([0, w], 0.05);

      var yScale = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, h]);

      var svg = d3.select('#respBarChart')
        .append('svg')
        .attr('width',  '100%')
        .attr('height', '100%')
        .attr('viewBox','0 0 '+Math.min(w,h)+' '+Math.min(w,h))
        .attr('viewBox', '0 0 640 360');

      svg.selectAll('rect')
        .data(data)
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
        .data(data)
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

      $(window).resize(function() {
        var width = $("#respBarChart").width();
        svg.attr("width", width);
        svg.attr("height", h);

        var xScale = d3.scale.ordinal()
          .domain(d3.range(data.length))
          .rangeRoundBands([0, w], 0.05);

        var yScale = d3.scale.linear()
          .domain([0, d3.max(data)])
          .range([0, h]);
      });
    }

    function calcBostockChart() {

      var margin = {top: 20, right: 30, bottom: 30, left: 40}
        , width = 960 - margin.left - margin.right
        , height = 500 - margin.top - margin.bottom;

      var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

      var y = d3.scale.linear()
        .range([height, 0]);

      var chart = d3.select("#respBarChart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      d3.csv("data.csv", type, function(error, data) {
        console.log(data);
        x.domain(data.map(function(d) { return d.letter; }));
        y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

        var bar = chart.selectAll("g")
          .data(data)
          .enter().append("g")
          .attr("transform", function(d) { return "translate(" + x(d.letter) + ",0)"; });

        bar.append("rect")
          .attr("y", function(d) { return y(d.frequency); })
          .attr("height", function(d) { return height - y(d.frequency); })
          .attr("width", x.rangeBand());

        bar.append("text")
          .attr("x", x.rangeBand() / 2)
          .attr("y", function(d) { return y(d.frequency) + 3; })
          .attr("dy", ".75em")
          .text(function(d) { return d.frequency; });
      });

      function type(d) {
        d.frequency = +d.frequency; // coerce to number
        return d;
      }
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
      },
      getResponsiveBarChart : function () {
        calcResponsiveBarChart();
      },
      getBostock : function () {
        calcBostockChart();
      }
    };
  });
