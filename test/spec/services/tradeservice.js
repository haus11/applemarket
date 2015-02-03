'use strict';

describe('Service: tradeService', function () {

  // load the service's module
  beforeEach(module('applemarketApp'));

  // instantiate service
  var tradeService;
  beforeEach(inject(function (_tradeService_) {
    tradeService = _tradeService_;
  }));

  it('should do something', function () {
    expect(!!tradeService).toBe(true);
  });

});
