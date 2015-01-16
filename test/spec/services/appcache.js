'use strict';

describe('Service: appCache', function () {

  // load the service's module
  beforeEach(module('applemarketApp'));

  // instantiate service
  var appCache;
  beforeEach(inject(function (_appCache_) {
    appCache = _appCache_;
  }));

  it('should do something', function () {
    expect(!!appCache).toBe(true);
  });

});
