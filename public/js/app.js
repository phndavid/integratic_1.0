angular.module('app',['ngRoute'])
	.config(function($routeProvider)
    {	
    	'use strict';
        $routeProvider.when('/',
            {
                templateUrl: 'view/home.html'
            })
            .when('/map',
            {
                templateUrl: 'view/map.html'
            })
            .when('/vehicle',
            {
                templateUrl: 'view/vehicle.html'
            })
            .when('/remote-vehicle',
            {
                templateUrl: 'view/remote-vehicle.html'
            }).otherwise(
            {
           		 redirectTo: '/'
        	});
    });
	