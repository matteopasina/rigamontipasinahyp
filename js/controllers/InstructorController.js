app.controller('InstructorController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get("http://grandepalestra.altervista.org/Instructor.php?id="+$routeParams.id)
  .success(function(response) {
      $scope.instructor=response[0]; 
     $scope.courses=response; 
  });
}]);