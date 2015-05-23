var courses = angular.module('allcourses', []);
app.controller('coursesCtrl', function($scope, $http) {
    $http.get("http://grandepalestra.altervista.org/Courses.php")
    .success(function(response) {$scope.courses = response;});
});