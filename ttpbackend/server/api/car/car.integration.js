'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newCar;

describe('Car API:', function() {
  describe('GET /api/cars', function() {
    var cars;

    beforeEach(function(done) {
      request(app)
        .get('/api/cars')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cars = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(cars).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/cars', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cars')
        .send({
          name: 'New Car',
          info: 'This is the brand new car!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newCar = res.body;
          done();
        });
    });

    it('should respond with the newly created car', function() {
      expect(newCar.name).to.equal('New Car');
      expect(newCar.info).to.equal('This is the brand new car!!!');
    });
  });

  describe('GET /api/cars/:id', function() {
    var car;

    beforeEach(function(done) {
      request(app)
        .get(`/api/cars/${newCar._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          car = res.body;
          done();
        });
    });

    afterEach(function() {
      car = {};
    });

    it('should respond with the requested car', function() {
      expect(car.name).to.equal('New Car');
      expect(car.info).to.equal('This is the brand new car!!!');
    });
  });

  describe('PUT /api/cars/:id', function() {
    var updatedCar;

    beforeEach(function(done) {
      request(app)
        .put(`/api/cars/${newCar._id}`)
        .send({
          name: 'Updated Car',
          info: 'This is the updated car!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedCar = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCar = {};
    });

    it('should respond with the updated car', function() {
      expect(updatedCar.name).to.equal('Updated Car');
      expect(updatedCar.info).to.equal('This is the updated car!!!');
    });

    it('should respond with the updated car on a subsequent GET', function(done) {
      request(app)
        .get(`/api/cars/${newCar._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let car = res.body;

          expect(car.name).to.equal('Updated Car');
          expect(car.info).to.equal('This is the updated car!!!');

          done();
        });
    });
  });

  describe('PATCH /api/cars/:id', function() {
    var patchedCar;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/cars/${newCar._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Car' },
          { op: 'replace', path: '/info', value: 'This is the patched car!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedCar = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedCar = {};
    });

    it('should respond with the patched car', function() {
      expect(patchedCar.name).to.equal('Patched Car');
      expect(patchedCar.info).to.equal('This is the patched car!!!');
    });
  });

  describe('DELETE /api/cars/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/cars/${newCar._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when car does not exist', function(done) {
      request(app)
        .delete(`/api/cars/${newCar._id}`)
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
