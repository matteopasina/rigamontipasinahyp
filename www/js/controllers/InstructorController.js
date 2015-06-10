app.controller('InstructorController', ['$scope','$http', '$routeParams','facebook', function($scope, $http, $routeParams,facebook) {
  $scope.$on('fb.auth.authResponseChange', function (event, response) { 
        $scope.$apply (function () { 
            $scope.connected = (response.status == 'connected'); 
        }); 
    }); 
$http.get("http://grandepalestra.altervista.org/Instructor.php?id="+$routeParams.id)
  .success(function(response) {
      $scope.instructor=response[0]; 
     $scope.courses=response; 
      $facebook.api('me').then(function (result) { 
        $scope.user = result[0]; 
        });  
    }); 
 
   
}]);