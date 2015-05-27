app.controller('Controller', ['$scope', function($scope) {
  $scope.customers = [
  {
    name: 'Instructors of the month',
    address: '#/Location'
  },
  {
    name: 'Courses',
    address: '#/CourseHome'
  }
];
  $scope.location = [
  {
    name: 'ProvaLocation1',
    address: '#/Location'
  },
  {
    name: 'ProvaLocation2',
    address: '#/Location'
  }
 ];
  $scope.courseHome = [
  {
    name: 'Course By Level',
    address: 'index.html#/courseByLevel'
  },
  {
    name: 'Courses By Category',
    address: 'index.html#/coursesByCategory'
  }];
      $scope.courseLevel = [
  {
    name: 'Courses',
    address: 'index.html#/CourseHome'
  },
  {
    name: 'Courses by Category',
    address: 'index.html#/coursesByCategory'
  }];
      $scope.courseCategory = [
  {
    name: 'Courses',
    address: 'index.html#/CourseHome'
  },
  {
    name: 'Courses by Level',
    address: 'index.html#/courseByLevel'
  }
 ]
}])
.directive('myCustomer', function() {
  return {
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'header.html'
  };
});
