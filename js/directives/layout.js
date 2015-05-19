app.directive('layout', function() { 
  return { 
    restrict: 'E', 
    scope: { 
        info: '=' 
    }, 
    templateUrl: 'js/directives/layout.html' 
  }; 
})