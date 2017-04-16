// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services','ngCordova','angular-jwt','ngStorage','nfcFilters'])

.config(function($ionicConfigProvider, $sceDelegateProvider,$httpProvider,jwtOptionsProvider){
  
  // jwtOptionsProvider.config({
  //   whiteListedDomains: ['ttpparking.herokuapp.com'],
  //     tokenGetter: ['$localStorage', function($localStorage) {
  //       var token = localStorage.getItem('token');
  //       console.log('tokenGetter',token)
  //       return token;
  //     }]
  //   });
  //   $httpProvider.interceptors.push('jwtInterceptor');
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','http://*/*','https://*/*']);

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
})

/*
  This directive is used with chat stuff.
*/
.directive('input', function($timeout) {
			return {
				restrict: 'E',
				scope: {
					'returnClose': '=',
					'onReturn': '&',
					'onFocus': '&',
					'onBlur': '&'
				},
				link: function(scope, element, attr) {
					element.bind('focus', function(e) {
						if (scope.onFocus) {
							$timeout(function() {
								scope.onFocus();
							});
						}
					});
					element.bind('blur', function(e) {
						if (scope.onBlur) {
							$timeout(function() {
								scope.onBlur();
							});
						}
					});
					element.bind('keydown', function(e) {
						if (e.which == 13) {
							if (scope.returnClose) element[0].blur();
							if (scope.onReturn) {
								$timeout(function() {
									scope.onReturn();
								});
							}
						}
					});
				}
			}
		})

.factory('nfcService', function ($rootScope, $ionicPlatform,$state,$ionicPopup,$http) {

        var tag = {};

        $ionicPlatform.ready(function() {
            nfc.addNdefListener(function (nfcEvent) {
                console.log(JSON.stringify(nfcEvent.tag, null, 4));
                $rootScope.$apply(function(){
                  console.log('dah dpt',tag);
                    angular.copy(nfcEvent.tag, tag);
                    // if necessary 
                    console.log('goto the newparking');
                    $state.go('app.newParking')
                });
            }, function () {
                console.log("Listening for NDEF Tags.");
            }, function (reason) {
                alert("Error adding NFC Listener " + reason);
            });

        });

        return {
            tag: tag,

            clearTag: function () {
                angular.copy({}, this.tag);
            }
        };
    });	