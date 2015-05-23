
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
  .when('/courseByLevel/',{
  		controller:'CourseLevelController',
    	templateUrl:'/views/CourseLevel.html'
  })
  .when('/coursesByCategory/',{
  		controller:'CourseByCourseCategoryController',
    	templateUrl:'/views/CourseLevel.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}); 