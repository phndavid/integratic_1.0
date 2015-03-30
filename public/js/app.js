angular.module('app',['ngRoute'])
 	.config(function($routeProvider)
     {	
     	'use strict';
         $routeProvider.when('/infoView',
            {
                templateUrl: 'view/infoView.html'
            }
            ).otherwise(
            {
                redirectTo: '/'
         	})
    });

	