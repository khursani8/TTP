angular.module('app.services', [])

.factory('BlankFactory', [function($http){
    return{
    };
}])

.service('Car', [function(){
    return {
        getCar: function(){
            return ['WWW 1234','ABC 1234','WAA 222']
        }
    }
}]);