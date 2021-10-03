class Money {
    constructor(value) {
        this._value = value;
        this._amount = 0;
    }
    toString() {
        let moneyType = this._value < 20 ? 'coin' : 'banknote';
        return `${this._value} ${moneyType}: ${this._amount} amount, ${this._amount*this._value} baht\n`
    }
}

class ChangeList {
    constructor() {
        this._moneys = {
            500: new Money(500),
            100: new Money(100),
            50: new Money(50),
            20: new Money(20),
            10: new Money(10),
            5: new Money(5),
            2: new Money(2),
            1: new Money(1),
        }
    }
    toString() {
        let result = ''
        for (let key in this._moneys) {
            if (this._moneys[key]._amount != 0) {
                result += this._moneys[key];
            }
        }
        return result;
    }
}

class ChangeMachine {
    constructor() {
        this._history = [];
        this._change = '0';
        this._changeList = null;
    }

    buy(price, pay) {
        this._change = pay - price;
        if (this._change < 0) return "failed";
        this._changeList = new ChangeList();
        this.changing(500);
        this.changing(100);
        this.changing(50);
        this.changing(20);
        this.changing(10);
        this.changing(5);
        this.changing(2);
        this.changing(1);

        this._history[this._history.length] = this._changeList;
        return 'success';
    }
    changing(bankType) {
        if (this._change < bankType) return false;
        this._changeList._moneys[bankType] = new Money(bankType);
        this._changeList._moneys[bankType]._amount = Math.floor(this._change / bankType);
        this._change = this._change % bankType;
        return true;
    }
}

let changeMachine = new ChangeMachine();
// console.log(changeMachine.buy(0, 452));
// console.log(changeMachine._history[0].toString());

console.log(changeMachine.buy(5, 100));
console.log(changeMachine._history[0].toString());