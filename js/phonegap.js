angular.module('App.services', [])
    .factory('cordovaReady', [function () {
        return function (fn) {
            var queue = [],
                impl = function () {
                    queue.push([].slice.call(arguments));
                };

            document.addEventListener('deviceready', function () {
                queue.forEach(function (args) {
                    fn.apply(this, args);
                });
                impl = fn;
            }, false);

            return function () {
                return impl.apply(this, arguments);
            };
        };
    }]);
    
angular.module('App.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It works!";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);