app.controller('CourseHomeController', ['$scope', 'courses', function($scope, courses) {
  courses.success(function(data) {
    $scope.courses = data;
  });
}]);

app.controller('CourseLevelController', ['$scope', 'coursesByLevel', function($scope, coursesByLevel) {
  coursesByLevel.success(function(data) {
    $scope.courses = data;
  });
}])
app.controller('CourseByCourseCategoryController', ['$scope', 'coursesByCategory', function($scope, coursesByCategory) {
  coursesByCategory.success(function(data) {
    $scope.courses = data;
  });
}])

