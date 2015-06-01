app.controller('NavBarController', ['$scope', function ($scope) {

    $scope.status = {
            isopen: false
        };

        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };


        $scope.customers = [
            {
                name: 'Instructors of the month',
                address: '#/Location',
                home:true
  }
];
        $scope.location = [
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
    .directive('myCustomer', function () {
        return {
            scope: {
                info: '='
            },
            templateUrl: 'header.html'
        };
    });