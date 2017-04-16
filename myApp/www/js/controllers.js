angular.module('app.controllers', [])

.controller('appCtrl', function($scope) {
})

.controller('newParkingCtrl', ['$scope', '$stateParams','$http','$cordovaGeolocation', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$cordovaGeolocation,$state) {

    $scope.parking = {
        location:'',
    }

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

    



    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
        $scope.lat  = position.coords.latitude
        $scope.long = position.coords.longitude
        $scope.parking.location = $scope.lat+','+$scope.long;
        }, function(err) {
        // error
        alert(err)
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
 
.controller('extendParkingCtrl', ['$scope', '$stateParams','$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$state) {

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
   
.controller('myCarCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {


    


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


}])

.controller('dashboard2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('chatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])