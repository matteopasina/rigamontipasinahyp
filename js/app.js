var app = angular.module('bigGymApp', []);

app.controller('headerController', function($scope){
    $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };
});