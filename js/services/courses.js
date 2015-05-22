app.factory('courses', ['$http', function($http) {
  return $http.get('http://grandepalestra.altervista.org/Courses.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]); 