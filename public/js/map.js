    angular.module('app')

    .directive("myMaps",function(){
      return{
       restrict:'E',
       template:'<div></div>',
       replace:true,
       link:function(scope,element,attrs){
        var latLng = new google.maps.LatLng(3.3422583, -76.529313);
        var mapOptions = {
         center: latLng,
         zoom:15,
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
    var map = new google.maps.Map(document.getElementById(attrs.id),mapOptions)
    var marker = new google.maps.Marker({
     position: latLng,
     map: map,
     title: 'Universidad Icesi',
     icon:'http://gavinwillis.co.uk/newimages/pointer.png'
 });
    marker.setMap(map);
}
}
});
