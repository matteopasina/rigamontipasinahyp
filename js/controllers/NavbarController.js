app.controller('Controller', ['$scope', function($scope) {
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
  $scope.location = [
  {
    name: 'ProvaLocation1',
    address: 'location.html'
  },
  {
    name: 'ProvaLocation2',
    address: 'location.html'
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
