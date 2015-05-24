app.controller('CourseHomeController', ['$scope', 'courses', function($scope, courses) {
  courses.success(function(data) {
    $scope.courses = data;
  });
  $scope.customers = [
  {
    name: 'Course By Level',
    address: 'Corsi.html#/courseByLevel/'
  },
  {
    name: 'Courses By Category',
    address: 'Corsi.html#/coursesByCategory/'
  }
];
}])
.directive('myCustomer', function() {
  return {
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'header.html'
  };
});

app.controller('CourseLevelController', ['$scope', 'coursesByLevel', function($scope, coursesByLevel) {
  coursesByLevel.success(function(data) {
    $scope.courses = data;
  });
  $scope.customers = [
  {
    name: 'Courses',
    address: 'Corsi.html#/'
  },
  {
    name: 'Courses by Category',
    address: 'Corsi.html#/coursesByCategory/'
  }
];
}])
app.controller('CourseByCourseCategoryController', ['$scope', 'coursesByCategory', function($scope, coursesByCategory) {
  coursesByCategory.success(function(data) {
    $scope.courses = data;
  });
  $scope.customers = [
  {
    name: 'Courses',
    address: 'Corsi.html#/'
  },
  {
    name: 'Courses by Level',
    address: 'Corsi.html#/courseByLevel/'
  }
];
}])

