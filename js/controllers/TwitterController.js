app.controller('TwitterCtrl',['$scope','$resource',function ($scope, $resource) {
  var TwitterAPI = $resource("https://api.twitter.com/1.1/statuses/user_timeline.json?count=5&user_id=406212547&screen_name=pasaTeo",
    { callback: "JSON_CALLBACK" },
    { get: { method: "JSONP" }});

  $scope.search = function() {
    $scope.searchResult = TwitterAPI.get({ q: $scope.searchTerm });
  };
}]);