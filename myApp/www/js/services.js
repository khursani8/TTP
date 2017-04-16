angular.module('app.services', [])

.factory('BlankFactory', [function($http){
    return{
    };
}])

.service('Car', [function(){
    return {
        getCar: function(){
            return ['WWW 8888','ABC 1234','WAA 222']
        }
    }
}]);