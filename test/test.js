// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Game } from '../src/js/game';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Our Game class', () => {

  let game;

  beforeEach(() => {
    game = new Game(355);
  });

  describe('Ability to create a game', () => {
    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });
  });

  describe('Ability to set the wizards age', () => {
    it('should set the passed in age', () => {
      expect(game.age).to.equal(355);
    });
  });

  describe('About our guesses', () => {
    it('should start at 0 guesses', () => {
      expect(game.guesses).to.equal(0);
    });
    it('should increment by 1 at each makeGuess method', () => {
      game.makeGuess();
      expect(game.guesses).to.equal(1);
      game.makeGuess();
      expect(game.guesses).to.equal(2);
    });
  });

  describe('About our Game state', () => {
    it('should be in play when created', () => {
      expect(game.state).to.equal('in play');
    });
    it('should change state to "lost" when I have made 10 incorrect guesses', () => {    
      for (let x = 0; x < 11; x++){
        game.makeGuess();
      }
      expect(game.state).to.equal('lost');
    });
    it('should change state to "won" when I make a correct guess', () => {
      game.makeGuess(355);
      expect(game.state).to.equal('won');
    });
    it('should always return the game state when I make a guess', () => {
      let y = game.makeGuess(150);
      expect(y).to.equal('in play');
      let x = game.makeGuess(355);
      expect(x).to.equal('won');
    });
  });

});