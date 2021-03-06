angular.module('app.controllers', [])

.controller('appCtrl', function($scope) {
})

.controller('newParkingCtrl', ['$scope', '$stateParams','$http','$cordovaGeolocation', '$state','Car', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$cordovaGeolocation,$state,Car) {

    $scope.parking = {
        location:'',
    }

    $scope.myCar = Car.getCar();

    // login.getUser()
    //     .then(user=>{
    //         $scope.user = user.data;
    //         console.log($scope.user);
    //         $http.get('https://ttpparking.herokuapp.com/api/cars/ownerId/'+$scope.user._id)
    //             .then(function(res){
    //                 // console.log(res.data[0].carList);
    //                 $scope.myCar = res.data[0] ? res.data[0].carList : '';
    //             })

    //     })

    



    var posOptions = {timeout: 5000, enableHighAccuracy: true};
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
        $scope.lat  = position.coords.latitude
        $scope.long = position.coords.longitude
        $scope.parking.location = $scope.lat+','+$scope.long;
        }, function(err) {
        // error
        $scope.lat  = 4.3853
        $scope.long = 100.9727
        $scope.parking.location = $scope.lat+','+$scope.long;
        // alert(err)
        // console.table('loc err',err.PositionError)
    });
    
    
    $scope.createParking = function(parking){
        parking.plate = 'lalaplate'
        if(parking){
                $http.post('https://ttpparking.herokuapp.com/api/parkings',parking).then(function(res){
                    $scope.response = res.data;
										$state.go('app.dashboard')
                })
            }
}

}])
   
.controller('myProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    // login.getUser()
    //     .then(user=>{
    //         $scope.user = user.data;
    //     })
}])
 
.controller('extendParkingCtrl', ['$scope', '$stateParams','$http', '$state','Car', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$state,Car) {


    $scope.myCar = Car.getCar();
    // login.getUser()
    //     .then(user=>{
    //         $http.get('https://ttpparking.herokuapp.com/api/cars/ownerId/'+user.data._id)
    //             .then(function(res){
    //                 // console.log(res.data[0].carList);
    //                  $scope.myCar = res.data[0] ? res.data[0].carList : '';
    //             })
    //     })


}

])
   
.controller('myCarCtrl', ['$scope', '$stateParams','$http','Car', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,Car) {


    $scope.myCar = Car.getCar();


}])

.controller('nfcCtrl', ['$scope', '$stateParams','nfcService','$ionicPopup' ,// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,nfcService,$ionicPopup) {

        // $scope.clear = function() {
        //     nfcService.clearTag();
        // };
        // $scope.tag = nfcService.tag;

}])
   
.controller('loginCtrl', ['$scope', '$stateParams','nfcService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,nfcService) {

     $scope.clear = function() {
            nfcService.clearTag();
        };
        $scope.tag = nfcService.tag;

}])
   
.controller('signupCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {
    

    // $scope.register = function(details){
    //     console.log(details);
    //     $http.post('https://ttpparking.herokuapp.com/api/users',details)
    //         .then((res)=>{
    //             console.log(res.data.token)
    //             localStorage.setItem('token',res.data.token);
    //         })
    // }

}])
   
.controller('parkingHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentOptionCtrl', ['$scope', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup) {

	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Link Payment Option',
			template: 'This feature is not yet available.'
		});
	};
}])

.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    count = 0;
    if(!count){
        $scope.minute = 10;
    }

    $scope.minute = ($scope.minute + $stateParams.extend) % 60
    $scope.hour = Math.floor(($scope.minute + $stateParams.extend) / 60)

}])

.controller('dashboard2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('chatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout, $ionicScrollDelegate, Messages) {

	$scope.hideTime = true;

		var alternate,
			isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

		$scope.sendMessage = function() {
			alternate = !alternate;

			var d = new Date();
		d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

			$scope.messages.push({
				userId: alternate ? '12345' : '54321',
				text: $scope.data.message,
				time: d
			});

			delete $scope.data.message;
			$ionicScrollDelegate.scrollBottom(true);

		};

		$scope.inputUp = function() {
			if (isIOS) $scope.data.keyboardHeight = 216;
			$timeout(function() {
				$ionicScrollDelegate.scrollBottom(true);
			}, 300);

		};

		$scope.inputDown = function() {
			if (isIOS) $scope.data.keyboardHeight = 0;
			$ionicScrollDelegate.resize();
		};

		$scope.closeKeyboard = function() {
			// cordova.plugins.Keyboard.close();
		};

		$scope.data = {};
		$scope.myId = '12345';
		$scope.messages = [];

}])