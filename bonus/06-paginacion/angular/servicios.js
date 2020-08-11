var app = angular.module('paginacionApp.servicios',[]);

app.factory('Paises', ['$http', function($http){
	
		var self ={
			cargando:false,
			pagina:1,
			total:0,
			totalpaginas:0,
			data:[],

			irA: function(pag){
				self.cargarData({
					pagina:pag
				});
			},

			cargarUltima:function(){
				self.cargarData({
					pagina:self.totalpaginas
				});
			},

			cargarPrimera:function(){
				self.cargarData({
					pagina:1
				});
			},

			cargarData:function( opciones ){
				self.cargando =true;
				self.pagina = opciones.pagina;

				$http({
					method: "POST",
					url: "php/servicios/paises.getPaises.php",
					data: opciones
	 
				}).then(function mySuccess(response) {
					console.log(response);

					self.cargando = false;
					self.totalpaginas = response.totalpaginas;
					self.total = response.total;
					self.data = response.data;
				}, function myError(response) {
					console.error(response);
				});
			}
			
		}

		var defecto = {
			pagina:1
		}

		self.cargarData(defecto);

		return self;

}])