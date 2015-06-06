var app=    angular.module('RoutingApp', ['ngRoute','ui.bootstrap','smoothScroll','ngAnimate']);

app.config(function ($routeProvider) {
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
            templateUrl: 'views/CourseLevel.html'
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
            controller: 'CourseController',
            templateUrl: 'views/Form.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});