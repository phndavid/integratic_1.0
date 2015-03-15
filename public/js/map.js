angular.module('app')

	.directive("myMaps",function(){
		return{
			restrict:'E',
			template:'<div></div>',
			replace:true,
			link:function(scope,element,attrs){
				var lating = new google.maps.LatLng(28.070011,83.24939);
				var mapOptions = {
					center: lating,
					zoom:8,
					mapTypeId: google.maps.MapTypeId.SATELLITE
				}
				var map = new google.maps.Map(document.getElementById(attrs.id),mapOptions)
			}
		}
	});
