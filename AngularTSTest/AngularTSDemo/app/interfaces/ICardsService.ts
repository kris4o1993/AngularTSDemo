module angularTS.Interfaces {

    export interface ICardsService {
        getCard(): ng.IPromise<ICard[]>;
    }

    export interface ICard {
        cardId: string;
        name: string;
        cardSet: string;
        cardType: string;
        faction: string;
        rarity: string;
        cost: number;
        attack: number;
        health: number;
        text: string;
        flavor: string;
        artist: string;
        collectible: boolean;
        elite: boolean;
        race: string;
        img: string;
        imgGold: string;
        locale: string;
    }
}