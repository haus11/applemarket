'use strict';

describe('Controller: SimplechartCtrl', function () {

  // load the controller's module
  beforeEach(module('applemarketApp'));

  var SimplechartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimplechartCtrl = $controller('SimplechartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
