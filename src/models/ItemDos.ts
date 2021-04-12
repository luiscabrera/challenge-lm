import { Price } from "./Price";

export class ItemDos {
    id?: string;
    title?: string;
    price?: Price;
    thumbnail?: string;
    condition?: string;
    free_shipping?: string;
    sold_quantity?: string;
    constructor(params: ItemDos = {} as ItemDos) {
        Object.assign(this, params);
    }
}