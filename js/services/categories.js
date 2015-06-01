app.factory('categories', ['$http', function($http) {
  return $http.get('http://grandepalestra.altervista.org/Categories.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]); 
