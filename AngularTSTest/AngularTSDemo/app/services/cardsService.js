var angularTS;
(function (angularTS) {
    var Services;
    (function (Services) {
        var CardsService = (function () {
            function CardsService($http) {
                this.httpService = $http;
            }
            CardsService.prototype.getCard = function () {
                return this.httpService.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/Ragnaros", {
                    headers: {
                        'X-Mashape-Authorization': 'XXIFJKPpGxmshkJP9auDbOKwnYsdp1JeCMjjsn3sBFdpq99bKz'
                    }
                }).then(function (response) {
                    return response.data;
                });
            };
            CardsService.$inject = [
                "$http"
            ];
            return CardsService;
        })();
        Services.CardsService = CardsService;
        angular.module('angularTS').service('angularTS.Services.CardsService', CardsService);
    })(Services = angularTS.Services || (angularTS.Services = {}));
})(angularTS || (angularTS = {}));
//# sourceMappingURL=CardsService.js.map