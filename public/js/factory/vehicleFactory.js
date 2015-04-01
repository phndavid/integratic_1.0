angular.module('app')
    .factory('vehiculesFactory',function(){
    var vehicules = [
        {id: 1,model: 'Aveo 2013',placa: 'VCH-123',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {id: 2,model: 'Captiva 2013',placa: 'VCH-123',state: 'apagado', doors: 'abiertas',address: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {id: 3,model: 'Tucson 2013',placa: 'VCH-123',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {id: 4,model: 'Tiida 2013',placa: 'VCH-123',state: 'apagado', doors: 'abiertas',address: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {id: 5,model: 'Picanto ion 2013',placa: 'VCH-123',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {id: 6,model: 'Cruze 2013',placa: 'VCH-123',state: 'apagado', doors: 'abiertas',address: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {id: 7,model: 'Mazda 3 2013',placa: 'VCH-123',state: 'prendido', doors: 'cerradas',address: 'cra 103 #11-40',trackerNumber: '3108526996'}
    ];
    var factory={}; 
    factory.getVehicules = function(){
        return vehicules; 
    }
    return factory; 
}); 
