app.factory('location', ['$http', function($http) {
  return $http.get('http://grandepalestra.altervista.org/Location.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]); 