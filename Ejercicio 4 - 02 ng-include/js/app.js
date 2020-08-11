(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.profesores = {};
	$scope.response = {};
	$scope.tblProfesores = 'parciales/tblProfesores.html';

	$http.get('json/profesores.json').then(function(response){
		// Código que se ejecuta cuando es correcta la petición
		$scope.response = response;
		$scope.profesores = response.data.profesores;
	});



}]);





})();
