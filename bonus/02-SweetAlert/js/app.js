
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

    $scope.mensaje = "Hola mundo";
    $scope.titulo = "Este es el titulo pai";
    $scope.subtitulo = "Este es el subtitulo mijo, eso es todo!";
    $scope.mensajeBorrar = "";

    $scope.mostrarAlerta = function(){
        swal($scope.mensaje);
    }

    $scope.mostrarConSubtitulo = function(){
        swal($scope.titulo, $scope.subtitulo);
    }

    $scope.mostrarConfirmacion = function(){
        swal({
            title: $scope.titulo,
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Si, borrarlo!",
            closeOnConfirm: false
          },
          function(){
            $scope.mensajeBorrar = "Operación ejecutada";

            $scope.$apply();
            swal("Borrado!", "Tu archivo imaginario ha sido borrado", "success");
          });
    }
	
}]);
