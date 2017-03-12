'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './parking.routes';

export class ParkingComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ttpApp.parking', [uiRouter])
  .config(routes)
  .component('parking', {
    template: require('./parking.html'),
    controller: ParkingComponent,
    controllerAs: 'parkingCtrl'
  })
  .name;
