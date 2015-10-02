module angularTS {
    export class Routes {
        static $inject = ['$routeProvider'];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when('/home', {
                    controller: 'angularTS.Controllers.DemoController',
                    templateUrl: 'app/views/card.html',
                    controllerAs: 'cardsController'
                }).otherwise({
                    redirectTo: '/home'
                });
        }
    }
} 