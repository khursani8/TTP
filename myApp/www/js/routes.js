angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'appCtrl'
	})
     
  .state('app.newParking', {
    url: '/newParking',
    views: {
			'menuContent' :{
				templateUrl: 'templates/newParking.html',
				controller: 'newParkingCtrl'
			}
		}
  })

  .state('app.myProfile', {
		url: '/myProfile',
    views: {
			'menuContent' :{
				templateUrl: 'templates/myProfile.html',
				controller: 'myProfileCtrl'
			}
		}
  })

	.state('app.extendParking', {
		url: '/extendParking',
    views: {
			'menuContent' :{
				templateUrl: 'templates/extendParking.html',
				controller: 'extendParkingCtrl'
			}
		}
  })

	.state('app.myCar', {
		url: '/myCar',
    views: {
			'menuContent' :{
				templateUrl: 'templates/myCar.html',
				controller: 'myCarCtrl'
			}
		}
  })

$urlRouterProvider.otherwise('/app/myProfile')

});