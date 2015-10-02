module angularTS.Controllers {
    export class DemoController {

        card: ng.IHttpPromiseCallbackArg<angularTS.Interfaces.ICard[]>;

        static $inject = ["angularTS.Services.CardsService"];

        constructor(
            private cardsService: angularTS.Interfaces.ICardsService
            ) { }

        getCards(): void {
           this.cardsService.getCard().then((data) => {
               this.card = data;
            });
        }
    }

    angular
        .module("angularTS")
        .controller("angularTS.Controllers.DemoController", DemoController);
} 