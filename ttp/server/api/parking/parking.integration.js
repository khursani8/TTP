'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newParking;

describe('Parking API:', function() {
  describe('GET /api/parkings', function() {
    var parkings;

    beforeEach(function(done) {
      request(app)
        .get('/api/parkings')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          parkings = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(parkings).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/parkings', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/parkings')
        .send({
          name: 'New Parking',
          info: 'This is the brand new parking!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newParking = res.body;
          done();
        });
    });

    it('should respond with the newly created parking', function() {
      expect(newParking.name).to.equal('New Parking');
      expect(newParking.info).to.equal('This is the brand new parking!!!');
    });
  });

  describe('GET /api/parkings/:id', function() {
    var parking;

    beforeEach(function(done) {
      request(app)
        .get(`/api/parkings/${newParking._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          parking = res.body;
          done();
        });
    });

    afterEach(function() {
      parking = {};
    });

    it('should respond with the requested parking', function() {
      expect(parking.name).to.equal('New Parking');
      expect(parking.info).to.equal('This is the brand new parking!!!');
    });
  });

  describe('PUT /api/parkings/:id', function() {
    var updatedParking;

    beforeEach(function(done) {
      request(app)
        .put(`/api/parkings/${newParking._id}`)
        .send({
          name: 'Updated Parking',
          info: 'This is the updated parking!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedParking = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedParking = {};
    });

    it('should respond with the updated parking', function() {
      expect(updatedParking.name).to.equal('Updated Parking');
      expect(updatedParking.info).to.equal('This is the updated parking!!!');
    });

    it('should respond with the updated parking on a subsequent GET', function(done) {
      request(app)
        .get(`/api/parkings/${newParking._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let parking = res.body;

          expect(parking.name).to.equal('Updated Parking');
          expect(parking.info).to.equal('This is the updated parking!!!');

          done();
        });
    });
  });

  describe('PATCH /api/parkings/:id', function() {
    var patchedParking;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/parkings/${newParking._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Parking' },
          { op: 'replace', path: '/info', value: 'This is the patched parking!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedParking = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedParking = {};
    });

    it('should respond with the patched parking', function() {
      expect(patchedParking.name).to.equal('Patched Parking');
      expect(patchedParking.info).to.equal('This is the patched parking!!!');
    });
  });

  describe('DELETE /api/parkings/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/parkings/${newParking._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when parking does not exist', function(done) {
      request(app)
        .delete(`/api/parkings/${newParking._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
