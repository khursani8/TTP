angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('myProfile', {
    url: '/myProfile',
    templateUrl: 'templates/myProfile.html',
    controller: 'myProfileCtrl'
  })

  .state('newParking', {
    url: '/newParking',
    templateUrl: 'templates/newParking.html',
    controller: 'newParkingCtrl'
  })

	.state('extendParking', {
    url: '/extendParking',
    templateUrl: 'templates/extendParking.html',
    controller: 'extendParkingCtrl'
  })

	.state('myCar', {
    url: '/myCar',
    templateUrl: 'templates/myCar.html',
    controller: 'myCarCtrl'
  })

$urlRouterProvider.otherwise('/myProfile')

  

});