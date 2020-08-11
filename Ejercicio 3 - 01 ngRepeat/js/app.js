(function(){

    var app = angular.module('universidadApp',[]);

    /**
     * los corchetes se colocan para enviar parametros a los controladores
     */
    app.controller('listadoCtrl', ['$scope',function($scope){
        $scope.listado = ["Fernando Herrera", "Melissa Florez", "Juan Carlos Pineda", "Mateo Gómez"];

        $scope.listadoProfesores = {
            profesores : [{
                nombre: "Fernando Herrera",
                edad: 29,
                clase: "PEE"
            },{
                nombre:"Melissa Florez",
                edad: 24,
                clase: "ICE"
            },{
                nombre: "Juan Carlos Pineda",
                edad: 42,
                clase: "M110"
            }]
        }
    }]);

})();