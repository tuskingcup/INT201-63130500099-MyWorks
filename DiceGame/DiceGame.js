class Dice {
    constructor() {
        this._point = 0;
    }
    roll() {
        this._point = Math.random() * 6 + 1;
    }
    getPoint() {
        return this._point;
    }
}
const gameStatus = {
    WIN: "win",
    LOSE: "lose",
    DRAW: "draw"
}
class Player {
    constructor(name) {
        this._name = name;
        this._dice = new Dice();
        this._gameHistory = [];
    }
    roll() {
        this._dice.roll();
    }
    getPoint() {
        this._dice.getPoint();
    }
    record(myRec) {
        this._gameHistory[this._gameHistory] = myRec;
    }
}
class Game {
    constructor(player1, player2, maxRound) {
        this._player1 = { player: player1, round: {} };
        this._player2 = { player: player2 };
        this._currentRound = 0;
        this._maxRound = maxRound;

    }

    play() {
        while (this._currentRound < this._maxRound) {
            this._currentRound++;
            this._player1.player.roll();
            this._player2.player.roll();
            this.record();
        }
        this._player1.player.record(this._player1.round);
    }
    record() {
        let result = Math.sign(this._player1.player.getPoint() - this._player2.player.getPoint());
        switch (result) {
            case -1:
                this._player1.round[this._currentRound] = {
                    point: this._player1.player.getPoint(),
                    status: gameStatus['LOSE']
                };
                this._player2.round[this._currentRound] = {
                    point: this._player2.player.getPoint(),
                    status: gameStatus['WIN']
                };
                break;
            case 0:
                this._player2.round[this._currentRound] = {
                    point: this._player1.player.getPoint(),
                    status: gameStatus['DRAW']
                };
                this._player2.round[this._currentRound] = {
                    point: this._player2.player.getPoint(),
                    status: gameStatus['DRAW']
                };
                break;
            case 1:
                this._player2.round[this._currentRound] = {
                    point: this._player1.player.getPoint(),
                    status: gameStatus['WIN']
                };
                this._player2.round[this._currentRound] = {
                    point: this._player2.player.getPoint(),
                    status: gameStatus['LOSE']
                };
                break;
        }
    }
}

let player1 = new Player("Tus");
let player2 = new Player("Ohm");
let game1 = new Game(player1, player2, 5);
game1.play();
console.log(player1._gameHistory[0]);
console.log(player2._gameHistory[0]);