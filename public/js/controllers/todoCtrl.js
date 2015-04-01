angular.module('app')
    .controller('VehiculesController' ,['$scope','vehiculesFactory', function($scope,vehiculesFactory){
    $scope.vehicules = vehiculesFactory.getVehicules();
    $scope.addVehicule = function(){
        var model = $scope.newVehicule.model;
        var placa = $scope.newVehicule.placa;
        var trackerNumber = $scope.newVehicule.trackerNumber;
        if((model != '' || model == undefined) && (placa != ''|| placa == undefined ) && (trackerNumber != ''|| trackerNumber == undefined)){
            $scope.vehicules.push({model:model,placa:placa, state:'off', doors: 'locked', direction: 'nn', trackerNumber:trackerNumber });
            $scope.newVehicule.model =''; 
            $scope.newVehicule.placa = ''; 
            $scope.newVehicule.trackerNumber = '';
        }else{
            alert("Por favor, ingrese todos los datos")
        }
    }
    $scope.selectVehicule = function(vehicule){
        $scope.actualVehicule = vehicule; 
    }  
}]);

	