/**
 * Created by Jason on 2016/1/21.
 */
app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: 'view/list.html',
                controller: 'listCtrl'
            }).
            when('/detail/:id', {
                templateUrl: 'view/detail.html',
                controller: 'detailCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);