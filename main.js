'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
const { mainModule } = require('process');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// This is what the hidden word will be 
const Selectedword = ['coding'];

// If correctGuesses array matched the correctGuesses you have won

// If the wrongLetters array has more than 7 wrong letters, YOU LOSE
const correctLetters = ['c', 'o', 'd', 'i', 'n', 'g'];
let correctGuesses = [];
let wrongGuesses = [];
let letter

const hangman = (letter) => {
// If the correct letters include the letter selected 
  if (correctLetters.includes(letter) === true ){
    
    correctGuesses.push(letter)
    // Push the letter into the correctGuesses array
    console.log(correctGuesses)
    checkForWinOrLose()
    console.log(`${letter} is a correct guess!`)
    if (correctGuesses.length === 6){
      
       correctGuesses = [];
      resetGame()
      return 'youve won the game'
    }

   
} else if (correctLetters.includes(letter) === false) {
   if (wrongGuesses.length > 6){
    
    console.log('You lost! Try again')
    wrongGuesses = [];
    resetGame();
    return `Sorry You Lose!`
   } else
    wrongGuesses.push(letter)
    console.log("Wrong guesses", wrongGuesses)
    checkForWinOrLose()
    return `${letter} does not exist in the word you are trying to guess`
}
 
};


const checkForWinOrLose = () => {
  for (let i = 0; i < correctLetters.length; i++) {
    if( correctLetters[i] === correctGuesses[i]){
       
     
     
      return `Youve won the game! `

    } else if (wrongGuesses.length === 7) {
      console.log('You lost! Try again')
      wrongGuesses = [];
      
      return `Sorry You Lose!`
    } else {
      
      return 
    }
  }
}





const resetGame = () => {
  rl.question('Would you like to play again? y or n ', (yOrn) => {
    if (yOrn === 'y') {

      
       correctGuesses = [];
       wrongGuesses = [];

      console.log( 'Starting a new game...' );

      return getPrompt()

    } else if (yOrn === 'n') {
        console.log('Thanks for Playing!')
      return 

    }
  } )
};
// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('Enter a letter a-z- ', (letter) => {
    console.log( hangman(letter) );
   getPrompt();
      if (correctGuesses.length === 6) {
        return 
      }
  });
}



// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('Start off with no correctGuesses, clean slate', () => {
    it('checks if you start off with no letters given to you for free', () => {

        assert.equal(correctGuesses.includes(letter), false);

    })
  })

  describe('#checkForWinOrLose()', () => {
    // it('checks if you have selected over 7 incorrect guesses', () => {

    //   assert.equal()

    // });




    it('checks if you the first letter is correct', () => {
      
      
      assert.equal(correctLetters[0], 'c');
      
    });
    it('checks if the second letter is correct', () => {
      
      assert.equal(correctLetters[1], 'o');

    });
    it('checks if third letter is correct', () => {
      
      assert.equal(correctLetters[2], 'd');

    });
    it('checks if fourth letter is correct', () => {
     
      assert.equal(correctLetters[3], 'i');

    });
    it('checks if fifth letter is correct', () => {
     
      assert.equal(correctLetters[4], 'n');

    });
    it('checks if sixth letter is correct', () => {
     
      assert.equal(correctLetters[5], 'g');

    });
  });
    describe('checks if our correct and wrong guesses are set back to an empty array', () => {
      it('shows our correctGuesses array set to empty ', () => {

          assert.equal(correctGuesses[0], null);

      });
      it('Shows our wrongGuesses array is set to empty ', () => {

          assert.equal(wrongGuesses[0], null);

      } )
    });
} else {

  getPrompt();
  checkForWinOrLose();

}
