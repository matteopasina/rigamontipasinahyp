"use strict";
var app = angular.module('RoutingApp', [  'ngRoute',
                                          'ui.bootstrap',
                                          'smoothScroll',
                                          'ngAnimate',
                                       'uiGmapgoogle-maps',
                                       'bnx.module.facebook']);


app.config(function ($routeProvider,uiGmapGoogleMapApiProvider) {
     uiGmapGoogleMapApiProvider.configure({
              key: 'AIzaSyDuJ3wFV2hYt4YCwQjNFW5FssdfZ5xcM9I',
              v: '3.17',
              libraries: 'weather,geometry,visualization'
             });
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/Home.html'
        })
        .when('/CourseHome/', {
            controller: 'CourseHomeController',
            templateUrl: 'views/CourseHome.html'
        })
        .when('/course/:id', {
            controller: 'CoursesJoinInstructor',
            templateUrl: 'views/Course.html'
        })
        .when('/courseByLevel/', {
            controller: 'CourseLevelController',
            templateUrl: 'views/CourseLevel.html'
        })
        .when('/coursesByCategory/', {
            controller: 'CourseByCourseCategoryController',
            templateUrl: 'views/CourseCategory.html'
        })
        .when('/instructor/:id', {
            controller: 'InstructorController',
            templateUrl: 'views/Instructor.html'
        })
        .when('/Location', {
            templateUrl: 'views/Location.html'
        })
        .when('/Categories/', {
            controller: 'CategoriesController',
            templateUrl: 'views/categories.html'
        })
        .when('/form/:id', {
            controller: 'formController',
            templateUrl: 'views/Form.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});