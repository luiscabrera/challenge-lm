import { Price } from "./Price";

export class Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: string;
    constructor(vars: Item) {
        this.id = vars.id;
        this.title = vars.title;
        this.price = vars.price;
        this.picture = vars.picture;
        this.condition = vars.condition;
        this.free_shipping = vars.free_shipping;
    }
}