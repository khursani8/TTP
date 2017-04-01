'use strict';

describe('Component: CarComponent', function() {
  // load the controller's module
  beforeEach(module('ttpbackendApp.car'));

  var CarComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CarComponent = $componentController('car', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
