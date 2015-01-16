'use strict';

describe('Service: roleGenerator', function () {

  // load the service's module
  beforeEach(module('applemarketApp'));

  // instantiate service
  var roleGenerator;
  beforeEach(inject(function (_roleGenerator_) {
    roleGenerator = _roleGenerator_;
  }));

  it('should do something', function () {
    expect(!!roleGenerator).toBe(true);
  });

});
