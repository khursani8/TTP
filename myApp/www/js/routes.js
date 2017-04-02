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

	.state('app.nfc', {
    url: '/nfc',
		views: {
			'menuContent' :{
				templateUrl: 'templates/nfc.html',
				controller: 'nfcCtrl'
			}
		}
  })

  .state('app.login', {
    url: '/login',
		views: {
			'menuContent' :{
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			}
		}
  })

  .state('app.signup', {
    url: '/signup',
		views: {
			'menuContent' :{
				templateUrl: 'templates/signup.html',
				controller: 'signupCtrl'
			}
		}
  })

  .state('app.parkingHistory', {
    url: '/history',
		views: {
			'menuContent' :{
				templateUrl: 'templates/parkingHistory.html',
				controller: 'parkingHistoryCtrl'
			}
		}
  })

  .state('app.paymentOption', {
    url: '/paymentOption',
		views: {
			'menuContent' :{
				templateUrl: 'templates/paymentOption.html',
				controller: 'paymentOptionCtrl'
			}
		}
  })

	.state('app.dashboard', {
    url: '/dashboard',
		views: {
			'menuContent' :{
				templateUrl: 'templates/dashboard.html',
				controller: 'dashboardCtrl'
			}
		}
  })

$urlRouterProvider.otherwise('/app/myProfile')

});