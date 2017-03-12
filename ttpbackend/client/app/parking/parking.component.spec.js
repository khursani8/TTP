'use strict';

describe('Component: ParkingComponent', function() {
  // load the controller's module
  beforeEach(module('ttpbackendApp.parking'));

  var ParkingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ParkingComponent = $componentController('parking', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
