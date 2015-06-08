app.controller('CarouselCtrl',['$scope','$http', function($scope, $http){
  var slides = $scope.slides = [];
  $http.get("http://grandepalestra.altervista.org/CarouselImages.php")
  .success(function(response) {
      $scope.slides=response; 
  });
}]);