var instructors = angular.module('allinstructors', []);
app.controller('instructorsCtrl', function($scope, $http) {
    $http.get("http://grandepalestra.altervista.org/Connessione.php")
    .success(function(response) {$scope.instructors = response;});
});