'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './car.routes';

export class CarComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
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
