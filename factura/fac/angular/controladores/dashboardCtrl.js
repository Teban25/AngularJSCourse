var app = angular.module('facturacionApp.dashboardCtrl',[]);

/* Controlador de clientes */
app.controller('dashboardCtrl',['$scope', function($scope){

    $scope.activar('mDashboard','','Dashboard','Información');

}]);