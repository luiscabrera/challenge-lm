export class Author {
    name: string;
    lastName: string;
    constructor(vars: Author) {
        this.name = vars.name;
        this.lastName = vars.lastName;
    }
}