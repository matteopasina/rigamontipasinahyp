app.controller('CourseController', ['$scope', 'courses', '$routeParams', function($scope, courses, $routeParams) {
  courses.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

app.controller('CoursesJoinInstructor', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get("http://grandepalestra.altervista.org/CourseJoinInstructor.php?id="+$routeParams.id)
  .success(function(response) {
      $scope.detail = response[0];
      $scope.instructors=response;      
  });
}]);