var instructors = angular.module('allinstructors', []);
app.controller('instructorsCtrl', function($scope, $http) {
    $http.get("http://grandepalestra.altervista.org/Instructors.php")
    .success(function(response) {$scope.instructors = response;});
});