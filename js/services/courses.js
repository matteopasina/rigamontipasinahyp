app.factory('courses', ['$http', function($http) {
  return $http.get('http://grandepalestra.altervista.org/Courses.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]); 

app.factory('coursesByLevel', ['$http', function($http) {
  return $http.get('http://grandepalestra.altervista.org/CoursesByLevel.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]); 
app.factory('coursesByCategory', ['$http', function($http) {
  return $http.get('http://grandepalestra.altervista.org/CourseByCourseCategory.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]); 

app.factory('coursesJoinInstructor', ['$http', function($http) {
  return $http.get('http://grandepalestra.altervista.org/CourseJoinInstructor.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]); 