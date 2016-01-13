myApp.controller('LoginController', ['$scope', function($scope) {

    $scope.greeting = 'Hola!';
    $scope.username = '';
    $scope.password = '';
    
    $scope.Login = function () {
        window.location = "Feed.html"
    };


}]);