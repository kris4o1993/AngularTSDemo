var angularTS;
(function (angularTS) {
    var Services;
    (function (Services) {
        var HeroListService = (function () {
            function HeroListService($http) {
                this.httpService = $http;
            }
            HeroListService.prototype.getHeroesList = function () {
                var list = [
                    { name: 'Krizerion', role: 'Mage', health: 560 },
                    { name: 'Botalert', role: 'Marksman', health: 540 },
                    { name: 'MightyOwl', role: 'Warrior', health: 730 },
                    { name: 'Unknot', role: 'Support', health: 620 },
                    { name: 'Zack', role: 'Mage', health: 570 }
                ];
                return list;
            };
            HeroListService.prototype.getHeroesFromAPI = function () {
                return this.httpService.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/Ysera").then(function (response) {
                    return response.data;
                });
            };
            HeroListService.$inject = [
                "$http"
            ];
            return HeroListService;
        })();
        Services.HeroListService = HeroListService;
        angular.module('angularTS').service('angularTS.Services.HeroListService', HeroListService);
    })(Services = angularTS.Services || (angularTS.Services = {}));
})(angularTS || (angularTS = {}));
//# sourceMappingURL=heroService.js.map