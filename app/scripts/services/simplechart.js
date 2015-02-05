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
    var chunks          = [];
    var chunkCount      = 0;
    var chunkRest       = 0;
    var chunkPosition   = 0; // Position hast to be 0 <= chunkPosition < chunkCount

    // -----------------------------------------------------------------------------
    // drawBarChart
    // needs an Array of data
    // -----------------------------------------------------------------------------
    function drawBarChart(amount, data) {

      if(data.constructor !== Array || data.length <= 0) { return; }

      // -----------------------------------------------------------------------------
      // putting the y-domain here will guarantee the highest y-value from the
      // the original data --> no confusion by looking at the data. The + 5.0 gives
      // some additional space for headlines at the top.
      // -----------------------------------------------------------------------------
      y.domain([0, parseFloat(d3.max(data, function(d) { return d.price; })) + 5.0]);

      // -----------------------------------------------------------------------------
      // splitting data into evenly sized chunks of size $amount
      // -----------------------------------------------------------------------------
      chunkCount = Math.floor(data.length / amount);
      chunkRest = data.length % amount;

      var start = 0;
      var end   = 0;

      for (var i = 0; i < chunkCount; ++i) {
        end += amount;
        chunks.push(data.slice(start, end));
        start = end;
      }

      // -----------------------------------------------------------------------------
      // adding empty objects to the last chunk. Allows to show same sized bars for
      // the last chunk in the frontend.
      // -----------------------------------------------------------------------------
      if (chunkRest > 0) {
        chunks.push(data.slice(start, data.length));

        for (var i = 0; i < amount - chunkRest; ++i) {
          var chunkIndex = chunks.length - 1;
          var lastChunk = chunks[chunkIndex];
          var lastItemOfLastChunk = lastChunk[lastChunk.length - 1];
          var transaction = parseInt(lastItemOfLastChunk.transactionNmbr) + 1;
          lastChunk.push(createEmptyObject(transaction, 0, 0));
        }
        ++chunkCount; // Setting chunkCount + 1, since there's now one more to browse through
      }

      drawBars(chunks[chunkPosition]);
    }

    // -----------------------------------------------------------------------------
    // draw bars
    // -----------------------------------------------------------------------------
    function drawBars(dataset) {
      x.domain(dataset.map(function(d) { return d.transactionNmbr; }));

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
        .data(dataset)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.transactionNmbr); })
        .attr("y", function(d) { return y(d.price) - 1.0; })
        .attr("height", function(d) { return height - y(d.price); })
        .attr("width", x.rangeBand());
    }

    // -----------------------------------------------------------------------------
    // control chunks to navigate through them with <- or ->
    // left subtracts 1 from chunkPosition, right adds 1 to it
    // chunkPosition has to be 0 <= chunkPosition < chunkCount
    // -----------------------------------------------------------------------------
    function controlBars(direction) {
      if ( (direction == 'left') && (chunkPosition - 1 >= 0) ) {
        --chunkPosition;
      }
      else if ( (direction == 'right') && (chunkPosition + 1 < chunkCount) ) {
        ++chunkPosition;
      }
      else {
        console.log('controlBarsError: position not accepted');
        return 0;
      }
      updateBarChart(chunks[chunkPosition]);
    }

    // -----------------------------------------------------------------------------
    // redraws the bars with data from new chunks
    // -----------------------------------------------------------------------------
    function updateBarChart(data) {
      x.domain(data.map(function(d) { return d.transactionNmbr; }));

      svg.selectAll('rect')
        .data(data)
        .transition()
        .duration(1000)
        .attr("y", function(d) { return y(d.price); })
        .attr("height", function(d) { return height - y(d.price); });

      svg.selectAll(".x.axis")
        .call(xAxis);
    }

    // -----------------------------------------------------------------------------
    // creates an empty data object
    // to fill columns without data
    // -----------------------------------------------------------------------------
    function createEmptyObject(transactionNmbr, session, round) {
      return {
        transactionNmbr: transactionNmbr,
        price: 0,
        session: session,
        round: round
      };
    }


    return {
      drawBarChart : function (amount, data) {
        drawBarChart(amount, data);
      },
      controlBarChart : function(direction) {
        controlBars(direction);
      }
    };
  });
