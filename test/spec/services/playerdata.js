'use strict';

describe('Service: playerData', function () {

  // load the service's module
  beforeEach(module('applemarketApp'));

  // instantiate service
  var playerData;
  beforeEach(inject(function (_playerData_) {
    playerData = _playerData_;
  }));

  it('should do something', function () {
    expect(!!playerData).toBe(true);
  });

});
