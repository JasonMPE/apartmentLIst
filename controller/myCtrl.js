/**
 * Created by Jason on 2016/1/21.
 */
var app = angular.module('myApp', ['angularUtils.directives.dirPagination','ngRoute']);


/*===============================listCtrl=============================================*/

app.controller('listCtrl', function($scope, $http){

    $http.get("src/data/apartment.json").then(function(res){
        $scope.apartmentList = res.data.apartments;
    });


    /*===============================Sort=======================================*/
    $scope.predicate = 'popularity';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : true;
        $scope.predicate = predicate;
    };



    /*===============================Pagination=======================================*/
    $scope.currentPage = 1;
    $scope.pageSize = 5;
    $scope.maxSize = 5;

});


/*===============================detailCtrl=============================================*/
app.controller('detailCtrl', function($scope, $http, $routeParams){
    $http.get("src/data/apartment.json").then(function(res){
        $scope.apartmentList = res.data.apartments;
        $scope.apartment = $scope.apartmentList[parseInt($routeParams.id)]
    });

});


