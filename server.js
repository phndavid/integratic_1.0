//VARIABLES PARA LA COMUNICACION VIA HTTP Y WEBSOCKETS
var express = require('express'); 
var app  = express();
var port     = process.env.PORT || 8090;

//Configurate
app.use(express.static(__dirname+'/public'));
app.listen(port);


var gpstracker = require("gpstracker");
var server = gpstracker.create().listen(8091, function(){
    console.log('listening your gps trackers on port', 8091);
});

server.trackers.on("connected", function(tracker){

    console.log("tracker connected with imei:", tracker.imei);

    tracker.on("help me", function(){
        console.log(tracker.imei + " pressed the help button!!".red);
    });

    tracker.on("position", function(position){
    	console.log(position);
        console.log("tracker {" + tracker.imei +  "}: lat", 
                            position.lat, "lng", position.lng);
    });

    tracker.trackEvery(20).seconds();
});
console.log('The App runs on port ' + port);