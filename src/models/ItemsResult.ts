import { Author } from "./Author";
import { Item } from "./Item";

export class ItemsResult {
    author: Author;
    categories: String[];
    items: Item[];
    constructor(vars: ItemsResult) {
        this.author = vars.author;
        this.categories = vars.categories;
        this.items = vars.items;
    }
}