var app = angular.module('facturacionApp.mensajes',[]);

app.factory('Mensajes',['$http','$q', function($http, $q){

    var self = {
        mensajes:[{
            img: 'dist/img/user2-160x160.jpg',
            nombre: "Juan Carlos",
            mensaje: "Bienvenido a nuestro servicio de facturación",
            fecha: '5-marzo'
        },
        {
            img: 'dist/img/user2-160x160.jpg',
            nombre: "Maria Soto",
            mensaje: "Lore ipsum a nuestro servicio de facturación",
            fecha: '8-marzo'
        },
        {
            img: 'dist/img/user2-160x160.jpg',
            nombre: "Victor Martinez",
            mensaje: "Lorem ipsum dolor sit amet, consectetur",
            fecha: '15-abril'
        }
    ]
    };

    return self;
}]);