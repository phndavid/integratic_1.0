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
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}
				var map = new google.maps.Map(document.getElementById(attrs.id),mapOptions)
				var marker = new google.maps.Marker({
					position: latLng,
					map: map,
					title: 'Cali'
				});
				marker.setMap(map);
			}
		}
	});
