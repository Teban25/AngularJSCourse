var app = angular.module('facturacionApp.clientesCtrl', []);

/* Controlador de clientes */
app.controller('clientesCtrl', ['$scope', '$routeParams', 'Clientes', function ($scope, $routeParams, Clientes) {

    var pag = $routeParams.pag;

    $scope.activar('mClientes', '', 'Clientes', 'listado');

    $scope.clienteSel = {};
    $scope.clientes = {};

    $scope.moverA = function (pag) {

        Clientes.cargarPagina(pag).then(function () {
            $scope.clientes = Clientes;
        });
    }

    $scope.moverA(pag);

    /* Mostrar modal de edición */
    $scope.mostrarModal = function(cliente){

        angular.copy(cliente, $scope.clienteSel);

        $('#modal_cliente').modal();
    }

    /*
    / Funcion para guardar
    */
   $scope.guardar = function( cliente, frmCliente ){

        Clientes.guardar( cliente ).then( function(){
            // codigo cuando se actualizó
            $("#modal_cliente").modal('hide');

            // resetea el formulario editado
            $scope.clienteSel = {};
            frmCliente.autoValidateFormOptions.resetForm();
        });
   }


}]);