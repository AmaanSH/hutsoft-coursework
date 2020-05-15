class FizzBuzz
{
    constructor(rounds) {
        this.score = 0;
        this.currentNumber = "";
        this.currentAction = "";
        this.gameNumbers = []
        this.rounds = rounds;
        this.currentRound = 1;
    }

    get random()
    {
        return this.generateRandom();
    }

    generateRandom() {
        var iterator = Math.floor(Math.random() * this.gameNumbers.length);
        return this.gameNumbers[iterator];
    }

    resetGame() {
        this.score = 0;
        this.currentNumber = "";
        this.currentAction = "";
        this.gameNumbers = [];
        this.currentRound = 1;
        this.rounds = 5;
        document.getElementById("number-display").innerHTML = "0";
        document.getElementById("current-score").innerHTML = "0";
        document.getElementById("current-round").innerHTML = this.currentRound;
    }

    set current(number) {
        this.currentNumber = number;
    }

    set action(action) {
        this.currentAction = action;
    }

    set round(round) {
        this.currentRound = round;
    }
}