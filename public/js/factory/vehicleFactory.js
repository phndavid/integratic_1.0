angular.module('app')
    .factory('vehiculesFactory',function(){
    var vehicules = [
        {id: '359710043602318',model: 'Aveo 2013',placa: 'VCH-123',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996',lat:'3.3653110334126453',lng:'-76.54007550926211',visible: true},
        {id: '2',model: 'Captiva 2013',placa: 'VCS-1456',state: 'apagado', doors: 'abiertas',address: 'cra 103 #11-40',trackerNumber: '3108526996',lat:'3.36531103341262',lng:'-76.53755423278811',visible: true},
        {id: '3',model: 'Tucson 2013',placa: 'VDF-163',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996',lat:'3.367431677381319',lng:'-76.53700706214907',visible: true},
        {id: '4',model: 'Tiida 2013',placa: 'DAZ-123',state: 'apagado', doors: 'abiertas',address: 'cra 103 #11-40',trackerNumber: '3108526996',lat:'3.364272130390176',lng:'-76.53450724334719',visible: true},
        {id: '5',model: 'Picanto ion 2013',placa: 'CHB-456',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996',lat:'3.3623228454421734',lng:'-76.53152462692263',visible: true},
        {id: '6',model: 'Cruze 2013',placa: 'CAV-134',state: 'apagado', doors: 'abiertas',address: 'cra 103 #11-40',trackerNumber: '3108526996',lat:'3.3585420783667863',lng:'-76.53024789543154',visible: true},
        {id: '7',model: 'Mazda 3 2013',placa: 'CGH-978',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996',lat:'3.352929807897045',lng:'-76.53046247215273',visible: true}
    ];
    var factory={}; 
    factory.getVehicules = function(){
        return vehicules; 
    }
    //comentario
    factory.getLocations = function(){
        var locations = []; 
        for (var i = 0; i < vehicules.length; i++) {
            var theVehicule = vehicules[i];
            locations[i] = {id: theVehicule.id, lat: theVehicule.lat, lng: theVehicule.lng, visible: theVehicule.visible};
        }
        return locations; 
    }
    factory.updateLocation = function(idVehicule,theLat,theLng){
        for (var i = 0; i < vehicules.length; i++) {
            //console.log(vehicules[i])
            if(vehicules[i].id == idVehicule){
                console.log(vehicules[i])
                vehicules[i].lat = theLat;
                vehicules[i].lng = theLng;
            }
        }
    }
    return factory; 
}); 
