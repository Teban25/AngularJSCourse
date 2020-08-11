var app = angular.module('facturacionApp.clientes', []);

app.factory('Clientes', ['$http', '$q', function ($http, $q) {

    var self = {
        'cargando': false,
        'err': false,
        'conteo': 0,
        'clientes': [],
        'pag_actual': 1,
        'pag_siguiente': 1,
        'pag_anterior': 1,
        'total_paginas': 1,
        'paginas': [],

        guardar: function( cliente ){
            var d = $q.defer();

            //$http.post('configuracion.json', cliente).success(function(response){
            $http.get('configuracion.json').success(function(response){
                console.log(response);

                self.cargarPagina( self.pag_actual );

                d.resolve();
            });

            return d.promise;
        },

        cargarPagina: function ( pag ) {
            var d = $q.defer();


            // $http.get('php/clientes/get.clientes.php?pag='+pag)
            $http.get('configuracion.json')
                .success(function (data) {
                    console.log(data);

                    self.err = false
                    self.conteo = 0;
                    self.clientes = [{ "id": "1", "nombre": "Juli Casas", "correo": "julio@domain.com", "telefono1": "5292065", "telefono2": "3007185231" }];
                    self.pag_actual = 1;
                    self.pag_siguiente = 1;
                    self.pag_anterior = 1;
                    self.total_paginas = 1;
                    self.paginas = [1,2];

                    return d.resolve();

                });

            return d.promise;
        }
    };

    return self;
}]);