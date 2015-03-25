var app = angular.module('app',['ngRoute']);
app
 	.config(function($routeProvider)
     {	
     	'use strict';
         $routeProvider.when('/',
            {
                controller: 'VehiculesController'
            })
            .otherwise(
            {
                redirectTo: '/'
         	})
    });
app.factory('vehiculesFactory',function(){
    var vehicules = [
        {model: 'Aveo 2013',placa: 'VCH-123',state: 'on', doors: 'locked',direction: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {model: 'Aveo 2013',placa: 'VCH-123',state: 'on', doors: 'locked',direction: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {model: 'Aveo 2013',placa: 'VCH-123',state: 'on', doors: 'locked',direction: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {model: 'Aveo 2013',placa: 'VCH-123',state: 'on', doors: 'locked',direction: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {model: 'Aveo 2013',placa: 'VCH-123',state: 'on', doors: 'locked',direction: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {model: 'Aveo 2013',placa: 'VCH-123',state: 'on', doors: 'locked',direction: 'cra 103 #11-40',trackerNumber: '3108526996'},
        {model: 'Aveo 2013',placa: 'VCH-123',state: 'on', doors: 'locked',direction: 'cra 103 #11-40',trackerNumber: '3108526996'}
    ];
    var factory={}; 
    factory.getVehicules = function(){
        return vehicules; 
    }
    return factory; 
}); 
var controllers = {};
controllers.VehiculesController = function($scope,vehiculesFactory){
    $scope.vehicules = vehiculesFactory.getVehicules();
    $scope.addVehicule = function(){
        console.log("se ejecuto");
        $scope.vehicules.push({model: $scope.newVehicule.model,
                               placa: $scope.newVehicule.placa,
                               state:'off',
                               doors: 'loocked',
                               direction: 'nn',
                               trackerNumber: $scope.newVehicule.trackerNumber 
                            });
        $scope.newVehicule.model =''; 
        $scope.newVehicule.placa = ''; 
        $scope.newVehicule.trackerNumber = '';
    }
};
app.controller(controllers);
	