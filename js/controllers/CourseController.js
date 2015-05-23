app.controller('CourseController', ['$scope', 'courses', '$routeParams', function($scope, courses, $routeParams) {
  courses.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);