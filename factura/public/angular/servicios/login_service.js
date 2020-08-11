var app = angular.module('login.loginService',[]);

app.factory('LoginService',['$http','$q', function( $http, $q ){

    var self = {
        login: function( datos ){
            var d = $q.defer();

            // $http.post('path').success(function(data){});
            $http.get('configuracion.json').success(function(data){

                d.resolve( data );
            });

            return d.promise;

        }
    }; 

    return self;
}])