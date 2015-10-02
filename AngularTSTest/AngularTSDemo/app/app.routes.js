var angularTS;
(function (angularTS) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when('/home', {
                controller: 'angularTS.Controllers.DemoController',
                templateUrl: 'app/views/card.html',
                controllerAs: 'cardsController'
            }).otherwise({
                redirectTo: '/home'
            });
        };
        Routes.$inject = ['$routeProvider'];
        return Routes;
    })();
    angularTS.Routes = Routes;
})(angularTS || (angularTS = {}));
//# sourceMappingURL=app.routes.js.map