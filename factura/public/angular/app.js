var app = angular.module('loginApp', ['login.loginService']);

app.controller('mainCtrl', ['$scope','LoginService', function ( $scope, LoginService ) {

    $scope.invalido = false;
    $scope.cargando = false;
    $scope.mensaje = "";

    $scope.datos = {};

    $scope.ingresar = function( datos ){

        if (datos.usuario.length < 3 || datos.contrasena.length < 3) {
            $scope.invalido = true;
            $scope.mensaje = "El usuario o la contraseña son incorrectos";
            return;
        }

        $scope.invalido = false;
        $scope.cargando = true;
        $scope.mensaje = "";

        LoginService.login( datos ).then( function( data ){
            if(data.err){
                $scope.invalido = true;
                $scope.cargando = false;
                $scope.mensaje = data.mensaje;
            }else{
                console.log( data.mensaje );
                window.location = data.url;
            }
        });

        console.log( datos );
    }

}]);