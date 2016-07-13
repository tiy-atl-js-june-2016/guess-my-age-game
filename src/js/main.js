import { Game } from './game';


let game = new Game(372);

let form = document.querySelector('.guess-form');
let input = document.querySelector('.my-guess')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let guess = Number(input.value);

  let result = game.makeGuess(guess);

  console.log(result);

});

