angular.module('app.controllers', [])

.controller('appCtrl', function($scope) {
})

.controller('newParkingCtrl', ['$scope', '$stateParams','$http','$cordovaGeolocation','login', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$cordovaGeolocation,login) {

    $scope.parking = {
        location:'',
    }

    login.getUser()
        .then(user=>{
            $scope.user = user.data;
            console.log($scope.user);
            $http.get('https://ttpparking.herokuapp.com/api/cars/ownerId/'+$scope.user._id)
                .then(function(res){
                    console.log(res.data[0].carList);
                    $scope.myCar = res.data[0].carList;
                })

        })

    



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
        console.table('loc err',err.PositionError)
    });
    
    
    $scope.createParking = function(parking){
        parking.plate = 'lalaplate'
        if(parking){
                $http.post('https://ttpparking.herokuapp.com/api/parkings',parking).then(function(res){
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
 
.controller('extendParkingCtrl', ['$scope', '$stateParams','$http','login', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,login) {

    login.getUser()
        .then(user=>{
            $http.get('https://ttpparking.herokuapp.com/api/cars/ownerId/'+user.data._id)
                .then(function(res){
                    console.log(res.data[0].carList);
                    $scope.myCar = res.data[0].carList;
                })
        })


}

])
   
.controller('myCarCtrl', ['$scope', '$stateParams','$http','login', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,login) {


    login.getUser()
        .then(user=>{
            $http.get('https://ttpparking.herokuapp.com/api/cars/ownerId/'+user.data._id)
                .then(function(res){
                    console.log(res.data[0].carList);
                    $scope.myCar = res.data[0].carList;
                })
        })


}])

.controller('nfcCtrl', ['$scope', '$stateParams','nfcService' ,// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,nfcService) {

$scope.tag = nfcService.tag;
        $scope.clear = function() {
            nfcService.clearTag();
        };
}])
   
.controller('loginCtrl', ['$scope', '$stateParams','$http','jwtHelper','login', '$ionicPopup','$timeout','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,jwtHelper,login,$ionicPopup,$timeout,$state) {

    var failed = 0;

    var loop = function(){

        if(failed>5){
            $ionicPopup.alert({
                title:"Failed",
                template:'Wrong login'
            })
            return

        }

        $timeout(function(){
            if(localStorage.getItem('token')){
            console.log('loggedin')
            $ionicPopup.alert({
                title:"Sucessfull",
                template:'dah login'
            })
            $state.go('app.myCar')
        }
        else {
            ++failed;
            loop()
        }
        },500)
    }

    $scope.tryLogin = function(email,password){
        console.log(email,password)
        login.getToken(email,password);
        loop();    
    }

    



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

.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])