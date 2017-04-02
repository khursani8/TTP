'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './car.routes';

export class CarComponent {
  listCar = [];
  newCar = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('car');
    });
  }

  $onInit() {
    this.$http.get('/api/cars')
      .then(response => {
        this.listCar = response.data;
        this.socket.syncUpdates('car', this.listCar);
      });
  }

  addCar() {
    if(this.newCar) {
      this.$http.post('/api/cars', {
        carList: [{'plateno':'www 1111','primary':true},{'plateno':'www 2222','primary':false}],
        ownerId: '58e025dcb75fda00118cf19d'
      });
      this.newCar = '';
    }
  }

  deleteCar(car) {
    this.$http.delete(`/api/cars/${car._id}`);
  }
}

export default angular.module('ttpbackendApp.car', [uiRouter])
  .config(routes)
  .component('car', {
    template: require('./car.html'),
    controller: CarComponent,
    controllerAs: 'carCtrl'
  })
  .name;
