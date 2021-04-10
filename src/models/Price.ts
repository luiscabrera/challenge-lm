export class Price {
    currency: string;
    amount: string;
    decimals: string;
    constructor(vars: Price) {
        this.currency = vars.currency;
        this.amount = vars.amount;
        this.decimals = vars.decimals;
    }
}