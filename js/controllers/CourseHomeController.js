app.controller('CourseHomeController', ['$scope', 'courses', function($scope, courses) {
  courses.success(function(data) {
    $scope.courses = data;
  });
  $scope.customers = [
  {
    name: 'Instructors of the month',
    address: 'location.html'
  },
  {
    name: 'Courses',
    address: 'location.html'
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
