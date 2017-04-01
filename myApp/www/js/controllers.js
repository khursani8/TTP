angular.module('app.controllers', [])

.controller('appCtrl', function($scope) {
})

.controller('newParkingCtrl', ['$scope', '$stateParams','$http','$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$cordovaGeolocation) {

    $scope.parking = {
        location:''
    }

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
        $scope.lat  = position.coords.latitude
        $scope.long = position.coords.longitude
        $scope.parking.location = $scope.lat+','+$scope.long;
        }, function(err) {
        // error
        alert('cannot get loc',err)
        });
    $http.get('http://localhost:3000/api/cars/ownerId/'+'58dfe8f77ab2422ad0be13ba')
        .then(function(res){
            console.log(res.data[0].carList);
            $scope.myCar = res.data[0].carList;
        })

    $scope.createParking = function(parking){
        parking.plate = 'lalaplate'
        if(parking){
                $http.post('http://localhost:3000/api/parkings',parking).then(function(res){
                    $scope.response = res.data;
                })
            }
}

}])
   
.controller('myProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    

}])
 
.controller('extendParkingCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {

$http.get('http://localhost:3000/api/cars/ownerId/'+'58dfe8f77ab2422ad0be13ba')
        .then(function(res){
            console.log(res.data[0].carList);
            $scope.myCar = res.data[0].carList;
        })
}])
   
.controller('myCarCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {


$http.get('http://localhost:3000/api/cars/ownerId/'+'58dfe8f77ab2422ad0be13ba')
        .then(function(res){
            console.log(res.data[0].carList);
            $scope.myCar = res.data[0].carList;
        })
}])

.controller('nfcCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('parkingHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentOptionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])