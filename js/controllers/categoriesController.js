app.controller('CategoriesController', ['$scope', 'categories', function($scope, categories) {
  categories.success(function(data) {
    $scope.categories = data;
  });
}]);