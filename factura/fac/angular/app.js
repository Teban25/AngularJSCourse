var app = angular.module('facturacionApp', [
    'ngRoute',
    'jcs-autoValidate',
    'facturacionApp.configuracion',
    'facturacionApp.mensajes',
    'facturacionApp.notificaciones',
    'facturacionApp.clientes',
    'facturacionApp.clientesCtrl',
    'facturacionApp.dashboardCtrl'
]);

angular.module('jcs-autoValidate')
.run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // To change the root resource file path
        defaultErrorMessageResolver.setI18nFileRootPath('angular/lib');
        defaultErrorMessageResolver.setCulture('es-co');
    }
]);

app.controller('mainCtrl', ['$scope', 'Configuracion', 'Mensajes', 'Notificaciones', function ($scope, Configuracion,
    Mensajes, Notificaciones) {

    $scope.config = {};
    $scope.mensajes = Mensajes.mensajes;
    $scope.notificaciones = Notificaciones.notificaciones;
    $scope.tituloNotificaciones = $scope.notificaciones.length > 1 ? "notificaciones" : "notificación";

    $scope.titulo = "";
    $scope.subtitulo = "";
    
    $scope.usuario = {
        nombre: "Esteban Gomez"
    }

    Configuracion.cargar().then(function () {
        $scope.config = Configuracion.config;
    });

    /* Funciones globales del scope */
    $scope.activar = function (menu, submenu, titulo, subtitulo) {
        $scope.titulo = titulo;
        $scope.subtitulo = subtitulo;

        $scope.mDashboard = "";
        $scope.mClientes = "";

        $scope[menu] = "active";
    }

}]);

// Rutas

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when('/clientes/:pag', {
            templateUrl: 'clientes/clientes.html',
            controller: 'clientesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

// Filtros
app.filter('quitarletra', function () {
    return function (palabra) {
        if (palabra && palabra.length > 1) {
            return palabra.substr(1);
        } else {
            return palabra;
        }
    }
})
    .filter('mensajecorto', function () {
        return function (mensaje) {
            if (mensaje && mensaje.length > 35) {
                return mensaje.substr(0, 35) + "...";
            } else {
                return mensaje;
            }
        }
    })