(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&&appid=9f50a805aa0089a1edd1829a5db029f0
	$scope.clima = {};
	
	$http.get('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=9f50a805aa0089a1edd1829a5db029f0')
	.then(function(response){
		$scope.clima = response.data;
	});

	$scope.kelvinCelcius = function(k){

		c = k - 273.15;
		c = Math.round(c*100) / 100;

		return c;
	}


}]);





})();
