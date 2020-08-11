
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

    $scope.formData = {};
    $scope.validations = {
        "formNombre" : "{'has-error': !formulario.nombre.$valid && !formulario.nombre.$pristine,'has-success': formulario.nombre.$valid && !formulario.nombre.$pristine }"
    };

    $scope.guardarDatos = function(valido){
        if(!valido){
            return;

        }
        console.log("posteando....");
    }
	
}]);
