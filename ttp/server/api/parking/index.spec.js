'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var parkingCtrlStub = {
  index: 'parkingCtrl.index',
  show: 'parkingCtrl.show',
  create: 'parkingCtrl.create',
  upsert: 'parkingCtrl.upsert',
  patch: 'parkingCtrl.patch',
  destroy: 'parkingCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var parkingIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './parking.controller': parkingCtrlStub
});

describe('Parking API Router:', function() {
  it('should return an express router instance', function() {
    expect(parkingIndex).to.equal(routerStub);
  });

  describe('GET /api/parkings', function() {
    it('should route to parking.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'parkingCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/parkings/:id', function() {
    it('should route to parking.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'parkingCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/parkings', function() {
    it('should route to parking.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'parkingCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/parkings/:id', function() {
    it('should route to parking.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'parkingCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/parkings/:id', function() {
    it('should route to parking.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'parkingCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/parkings/:id', function() {
    it('should route to parking.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'parkingCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
