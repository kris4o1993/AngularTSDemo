var angularTS;
(function (angularTS) {
    var Controllers;
    (function (Controllers) {
        var DemoController = (function () {
            function DemoController(cardsService) {
                this.cardsService = cardsService;
            }
            DemoController.prototype.getCards = function () {
                var _this = this;
                this.cardsService.getCard().then(function (data) {
                    _this.card = data;
                });
            };
            DemoController.$inject = ["angularTS.Services.CardsService"];
            return DemoController;
        })();
        Controllers.DemoController = DemoController;
        angular.module("angularTS").controller("angularTS.Controllers.DemoController", DemoController);
    })(Controllers = angularTS.Controllers || (angularTS.Controllers = {}));
})(angularTS || (angularTS = {}));
//# sourceMappingURL=DemoController.js.map