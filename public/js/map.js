angular.module('app')

	.directive("myMaps",function(){
		return{
			restrict:'E',
			template:'<div></div>',
			replace:true,
			link:function(scope,element,attrs){
				var latLng = new google.maps.LatLng(3.420555600000000000,-76,522222199999990000);
				var mapOptions = {
					center: latLng,
					zoom:8,
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
