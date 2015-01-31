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

    function calcBostockChart(amount) {

      var margin = {top: 20, right: 20, bottom: 60, left: 80},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

      var y = d3.scale.linear()
        .range([height, 0]);

      var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

      var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

      var svg = d3.select("#respBarChart").append("svg")
          .attr('preserveAspectRatio', 'xMinYMin meet')
          .attr('viewBox', '0 0 960 500')
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      d3.csv("data.csv", /*type,*/ function(error, data) {
        // -----------------------------------------------------------------------------
        // splitting data into evenly sized chunks of size $amount
        // -----------------------------------------------------------------------------
        var chunks = [];
        var chunkCount = Math.floor(data.length / amount);
        var chunkRest  = data.length % amount;
        var start = 0,
            end   = 0;

        for (i = 0; i < chunkCount; ++i) {
          end += chunkCount;
          chunks.push(data.slice(start, end));
          start = end;
        }

        if (chunkRest > 0) {
          chunks.push(data.slice(start, data.length));

          for (i = 0; i < amount - chunkRest; ++i) {

            var chunkIndex = chunks.length - 1;
            var lastChunk  = chunks[chunkIndex];
            var lastItemOfLastChunk = lastChunk[lastChunk.length - 1];
            var transaction = parseInt(lastItemOfLastChunk.transaction) + 1;
            console.log(transaction);


            lastChunk.push(createEmptyObject(transaction,0,0));
          }
        }
        drawBars(chunks[0]);
        controlChunks(chunks);
      });

      // -----------------------------------------------------------------------------
      // control chunks to navigate through them with <- or ->
      // -----------------------------------------------------------------------------
      function controlChunks(chunks) {
        console.log(chunks[5]);
        updateBars(chunks[5]);
      }

      // -----------------------------------------------------------------------------
      // draw bars
      // -----------------------------------------------------------------------------
      function drawBars(data) {
        console.log(data);
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
          .text('Transaction');

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

      // -----------------------------------------------------------------------------
      // redraws the bars with data from new chunks
      // -----------------------------------------------------------------------------
      function updateBars(data) {
        x.domain(data.map(function(d) { return d.transaction; }));

        svg.selectAll('rect')
          .data(data)
          .attr("y", function(d) { return y(d.price); })
          .attr("height", function(d) { return height - y(d.price); })

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

      //function type(d) {
      //  d.price = +d.price; // coerce to number
      //  return d;
      //}
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
      getBostock : function (amount) {
        calcBostockChart(amount);
      }
    };
  });
