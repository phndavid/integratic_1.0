//VARIABLES PARA LA COMUNICACION VIA HTTP Y WEBSOCKETS
var express = require('express'); 
var app  = express();
var httpServer = require('http').createServer(app); 
var io = require('socket.io').listen(httpServer);
var port =  8090;
//Configuracion de rutas y del puerto de escucha
app.use(express.static(__dirname+'/public'));
httpServer.listen(port);
//prueba socket.io
sockets = [];  //arreglo de sockets, uno para cada conexion con el cliente
io.on('connection',function(socket){
	sockets.push(socket);
	console.log('entro un cliente');
	socket.emit('ya se que te conectaste');
	socket.on('hideTheMarker',function(data){
		console.log(data);
	});
});
//Configuracion del servidor del tracker
var gpstracker = require("gpstracker");
var serverGps = gpstracker.create()
.listen(8091, function(){
    console.log('listening your gps trackers on port', 8091);
});
serverGps.trackers.on("connected", function(tracker){
    console.log("tracker connected with imei:", tracker.imei);
    tracker.on("help me", function(){
        console.log(tracker.imei + " pressed the help button!!".red);
    });
    tracker.on("position", function(position){
            for(var i=0; i<sockets.length;i++){
                sockets[i].emit('location-arrived', tracker.imei + ',' + position.lat + ',' + position.lng);
            }             
        console.log("tracker {" + tracker.imei +  "}: lat", 
                            position.lat, "lng", position.lng);
    });
    tracker.trackEvery(20).seconds();
});
console.log('The App runs on port ' + port);