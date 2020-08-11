var app = angular.module('promesaApp.servicios', []);

app.factory('Personas', ['$http', '$q', function ($http, $q) {

    var self = {
        "cargando": false,
        "data": []
    };

    self.cargarData = function () {

        self.cargando = true;

        var q = $q.defer();

        console.log("Funcion llamada..");

        $http.get("http://www.json-generator.com/api/json/get/cewgDZkNQi")
            .then(function success(response) {

                self.cargando =false;
                self.data = response.data;

                console.log("Todo bien!");
                console.log(response);
            }, function error(response) {
                console.error(":(");
                console.error(response);
            });

    };

    self.cargarData();

    return self;
}])