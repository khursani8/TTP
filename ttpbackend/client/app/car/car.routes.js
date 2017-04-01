'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('car', {
      url: '/car',
      template: '<car></car>'
    });
}
