angular.module('app')
    .controller('VehiculesController' ,['$scope','vehiculesFactory', function($scope,vehiculesFactory){
    $scope.vehicules = vehiculesFactory.getVehicules();
    console.log($scope.vehicules[2])
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
    angular.module('app')
    .controller('MapController',['$scope','vehiculesFactory', function($scope,vehiculesFactory){
        var latLng = new google.maps.LatLng(3.364272130390176, -76.53450724334719);
        var mapOptions = {
         center: latLng,
         zoom:14,
         styles:[
         {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        }
        ]                       
    }
    var checkbox = true; 
    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    var arrMarkers = []; 
    var incializeMarkers = function(){ 
        var locations = vehiculesFactory.getLocations();
        var markers = [];
        for (var i=0;i<locations.length;i++){
            arrMarkers.push( new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i].lat,locations[i].lng),
                        map: map,
                        visible: true,
                        icon:'http://gavinwillis.co.uk/newimages/pointer.png'
                    }));
        }  
    }
    incializeMarkers();

    var showTheMarker = function(id){
        var pointers = document.getElementById(id);
        pointers.className = 'map-pointer';
        arrMarkers[id].setVisible(true);
        checkStateEnable(); 

    }
    var hideTheMarker = function(id){       
        var pointers = document.getElementById(id);
        pointers.className = 'unpointer';
        arrMarkers[id].setVisible(false); 
        checkStateDisable(); 
    }
    var showAllMarkers = function(){
        for( var i =0 ; i < arrMarkers.length; i++ ) {
            //$scope.arrMarkers[i].setMap($scope.map);
            arrMarkers[i].setVisible(true);
            var pointers = document.getElementById(i);
            pointers.className = 'map-pointer'
        }
        checkbox=true;

    }
    var hideAllMarkers = function(){
        for( var i = 0; i < arrMarkers.length; i++ ) {
            //$scope.arrMarkers[0].setMap(null);
            arrMarkers[i].setVisible(false); 
            var pointers = document.getElementById(i);
            pointers.className = 'unpointer'
        }  
        checkbox = false;
    }
    var checkStateEnable = function(){ 
        var check = document.getElementById('selectAll-checkbox');
        var allMarked = true; 
        for(var i=0; i<arrMarkers.length;i++){
            if(!arrMarkers[i].getVisible()){
                allMarked = false; 
                break; 
            }
        }
        if(allMarked){
            check.checked = 1;
            checkbox = true; 
        } 
    }
    var checkStateDisable = function(){ 
        var check = document.getElementById('selectAll-checkbox'); 
        check.checked = 0; 
        checkbox = false; 
    }
    $scope.selectAll = function(){
        if(checkbox){
            hideAllMarkers();
        }else{
            showAllMarkers(); 
        }
    } 

    $scope.selectTheMarker = function(id){ 
        var theMarker = arrMarkers[0]
        if(arrMarkers[id].getVisible()){
            hideTheMarker(id);
        }else{
            showTheMarker(id);
        }
    } 

}]);


	