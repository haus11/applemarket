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

    // -----------------------------------------------------------------------------
    // d3 margins
    // -----------------------------------------------------------------------------
    var margin = {top: 20, right: 20, bottom: 60, left: 80},
        width  = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;


    // -----------------------------------------------------------------------------
    // x and y value orientation
    // -----------------------------------------------------------------------------
    var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
      .range([height, 0]);


    // -----------------------------------------------------------------------------
    // axis definitions
    // -----------------------------------------------------------------------------
    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

    // -----------------------------------------------------------------------------
    // targets id in which the chart will be drawn
    // -----------------------------------------------------------------------------
    var svg = d3.select("#respBarChart").append("svg")
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 960 500')
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // -----------------------------------------------------------------------------
    // variables to browse through dataset
    // -----------------------------------------------------------------------------
    var chunks     = [];
    var chunkCount = 0;
    var chunkRest  = 0;

    function drawBarChart(amount) {
      d3.csv("data.csv", /*type,*/ function(error, data) {
        // -----------------------------------------------------------------------------
        // splitting data into evenly sized chunks of size $amount
        // -----------------------------------------------------------------------------
        chunkCount = Math.floor(data.length / amount);
        chunkRest = data.length % amount;

        var start = 0;
        var end   = 0;

        for (var i = 0; i < chunkCount; ++i) {
          end += chunkCount;
          chunks.push(data.slice(start, end));
          start = end;
        }

        if (chunkRest > 0) {
          chunks.push(data.slice(start, data.length));

          for (var i = 0; i < amount - chunkRest; ++i) {
            var chunkIndex = chunks.length - 1;
            var lastChunk = chunks[chunkIndex];
            var lastItemOfLastChunk = lastChunk[lastChunk.length - 1];
            var transaction = parseInt(lastItemOfLastChunk.transaction) + 1;
            lastChunk.push(createEmptyObject(transaction, 0, 0));
          }
        }
        drawBars(chunks[0]);
      });

      // -----------------------------------------------------------------------------
      // draw bars
      // -----------------------------------------------------------------------------
      function drawBars(data) {
        x.domain(data.map(function(d) { return d.transaction; }));
        y.domain([0, d3.max(data, function(d) { return d.price; })]);

        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .style('stroke-width', '3px')
          .call(xAxis)
          .append('text')
          .attr('x', '45%')
          .attr('dy', '2.5em')
          .style('text-anchor', 'middle')
          .style('font-size', '18px')
          .text('Transactions');

        svg.append("g")
          .attr("class", "y axis")
          .style('stroke-width', '3px')
          .call(yAxis)
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('x', '-20%')
          .attr('y', 6)
          .attr('dy', '-4em')
          .style('text-anchor', 'middle')
          .style('font-size', '18px')
          .text('Price for bushel of apples');

        svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.transaction); })
          .attr("y", function(d) { return y(d.price); })
          .attr("height", function(d) { return height - y(d.price); })
          .attr("width", x.rangeBand());
      }
    }

    // -----------------------------------------------------------------------------
    // control chunks to navigate through them with <- or ->
    // -----------------------------------------------------------------------------
    function controlBars(data, direction) {

      updateBarChart(chunks[5]);
    }

    function go

    // -----------------------------------------------------------------------------
    // redraws the bars with data from new chunks
    // -----------------------------------------------------------------------------
    function updateBarChart(data) {
      x.domain(data.map(function(d) { return d.transaction; }));

      svg.selectAll('rect')
        .data(data)
        .attr("y", function(d) { return y(d.price); })
        .attr("height", function(d) { return height - y(d.price); })
        .transition()
        .duration(5000);

      svg.selectAll(".x.axis")
        .call(xAxis);
    }

    // -----------------------------------------------------------------------------
    // creates an empty data object
    // to fill columns without data
    // -----------------------------------------------------------------------------
    function createEmptyObject(transactionNmbr, session, round) {
      return {
        transaction: transactionNmbr,
        price: 0,
        session: session,
        round: round
      };
    }


    return {
      getSimpleDataDiv : function () {
       calcDivGraph();
      },
      getSimpleDataSvg : function () {
        calcSvgGraph();
      },
      drawBarChart : function (amount) {
        drawBarChart(amount);
      },
      updateBarChart : function(amount, start) {

      }
    };
  });
