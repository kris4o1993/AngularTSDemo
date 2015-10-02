((): void => {
    var app = angular.module('angularTS', ['ngRoute']);
    app.config(angularTS.Routes.configureRoutes);
})() 