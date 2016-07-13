class Game {
  constructor (number) {
    this.age      = number;
    this.guesses  = 0;
    this.state    = 'in play';
  }

  makeGuess (guess) {

    if (this.guesses >= 10) {
      this.state = 'lost';
    } else if (guess === this.age) {
      this.state = 'won';
    } else {
      this.guesses = this.guesses + 1;
    }

    return this.state;
  }

}

export { Game };