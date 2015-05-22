
var app = angular.module('CourseApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'CourseHomeController', 
      templateUrl: '/views/CourseHome.html' 
    }) 
    .when('/course/:id',{
  		controller:'CourseController',
    	templateUrl:'/views/Course.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}); 