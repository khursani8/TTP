'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './parking.routes';

export class ParkingComponent {
  listParking = [];
  newParking = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('parking');
    });
  }

  $onInit() {
    this.$http.get('/api/parkings')
      .then(response => {
        this.listParking = response.data;
        this.socket.syncUpdates('parking', this.listParking);
      });
  }

  addParking() {
    if(this.newParking) {
      this.$http.post('/api/parkings', {
        parkingLot: this.newParking,
        plate: 'noplate',
        location: '111.10,123.21',
        time: 30,
        price: 20
      });
      this.newParking = '';
    }
  }

  deleteParking(parking) {
    this.$http.delete(`/api/parkings/${parking._id}`);
  }
}

export default angular.module('ttpbackendApp.parking', [uiRouter])
  .config(routes)
  .component('parking', {
    template: require('./parking.html'),
    controller: ParkingComponent,
    controllerAs: 'parkingCtrl'
  })
  .name;
