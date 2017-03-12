'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('parking', {
      url: '/parking',
      template: '<parking></parking>'
    });
}
