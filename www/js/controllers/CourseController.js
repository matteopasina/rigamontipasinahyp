app.controller('formController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get("http://grandepalestra.altervista.org/Form.php?id="+$routeParams.id)
  .success(function(response) {
      $scope.detail = response[0];
  });
}]);

app.controller('CoursesJoinInstructor', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get("http://grandepalestra.altervista.org/CourseJoinInstructor.php?id="+$routeParams.id)
  .success(function(response) {
      $scope.detail = response[0];
      $scope.instructors=response;      
  });
}]);