module angularTS.Services {
    export class CardsService implements angularTS.Interfaces.ICardsService {
        httpService: ng.IHttpService;

        static $inject = [
            "$http"
        ];

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getCard(): ng.IPromise<angularTS.Interfaces.ICard[]>{
            return this.httpService.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/Ragnaros", {
                headers: {
                    'X-Mashape-Authorization': 'XXIFJKPpGxmshkJP9auDbOKwnYsdp1JeCMjjsn3sBFdpq99bKz'
                }
            })
                .then((response: ng.IHttpPromiseCallbackArg<angularTS.Interfaces.ICard[]>): angularTS.Interfaces.ICard[]=> {
                return response.data;
            })
        }
    }

    angular
        .module('angularTS')
        .service('angularTS.Services.CardsService', CardsService);
}