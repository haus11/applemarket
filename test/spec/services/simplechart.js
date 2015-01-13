'use strict';

describe('Service: simpleChart', function () {

  // load the service's module
  beforeEach(module('applemarketApp'));

  // instantiate service
  var simpleChart;
  beforeEach(inject(function (_simpleChart_) {
    simpleChart = _simpleChart_;
  }));

  it('should do something', function () {
    expect(!!simpleChart).toBe(true);
  });

});
