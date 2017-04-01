angular.module('app.controllers', [])

.controller('appCtrl', function($scope) {
})

.controller('newParkingCtrl', ['$scope', '$stateParams','$http','$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$cordovaGeolocation) {

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
        var lat  = position.coords.latitude
        var long = position.coords.longitude
        }, function(err) {
            alert('cannot get location',err)
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
 
.controller('extendParkingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myCarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])