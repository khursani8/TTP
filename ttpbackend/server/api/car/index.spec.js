'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var carCtrlStub = {
  index: 'carCtrl.index',
  show: 'carCtrl.show',
  create: 'carCtrl.create',
  upsert: 'carCtrl.upsert',
  patch: 'carCtrl.patch',
  destroy: 'carCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var carIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './car.controller': carCtrlStub
});

describe('Car API Router:', function() {
  it('should return an express router instance', function() {
    expect(carIndex).to.equal(routerStub);
  });

  describe('GET /api/cars', function() {
    it('should route to car.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'carCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/cars/:id', function() {
    it('should route to car.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'carCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/cars', function() {
    it('should route to car.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'carCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/cars/:id', function() {
    it('should route to car.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'carCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/cars/:id', function() {
    it('should route to car.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'carCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/cars/:id', function() {
    it('should route to car.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'carCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
