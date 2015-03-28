angular.module('app',['ngRoute'])
 	.config(function($routeProvider)
     {	
     	'use strict';
         $routeProvider.when('/',
            {
                controller: 'VehiculesController'
            })
            .when('/infoView',
            {
                controller: 'VehiculesController',
                templateUrl: 'view/infoView.html'
            }
            )
            .otherwise(
            {
                redirectTo: '/'
         	})
    });

	