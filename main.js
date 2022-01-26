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
const correctGuesses = [];
const wrongGuesses = [];


const hangman = (letter) => {
// If the correct letters include the selectedWord
  if (correctLetters.includes(letter) === true ){
    
    correctGuesses.push(letter)
    console.log(correctGuesses)
    checkForWinOrLose()
    console.log(`${letter} is a correct guess!`)
    if (correctGuesses.length === 6){
      return 'youve won the game'
    }

   
} else if (correctLetters.includes(letter) === false) {
   
    wrongGuesses.push(letter)
  checkForWinOrLose()
    return `${letter} does not exist in the word you are trying to guess`
}
 
};


const checkForWinOrLose = () => {
  for (let i = 0; i < correctLetters.length; i++) {
    if( correctLetters[i] === correctGuesses[i]){
       
      correctGuesses = [];
      getPrompt()
      return `Youve won the game! `

    } else if (wrongGuesses.length > 7) {
      getPrompt()
      return `Sorry You Lose!`
    } else {
      return 
    }
  }
}


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

  describe('#checkForWinOrLose()', () => {
    // it('checks if you have selected over 7 incorrect guesses', () => {

    //   assert.equal()

    // });




    it('checks if you the first letter is correct', () => {
      
      
      assert.equal(correctGuesses[0], 'c');
      
    });
    it('checks if the second letter is correct', () => {
      
      assert.equal(correctGuesses[1], 'o');

    });
    it('checks if third letter is correct', () => {
      
      assert.equal(correctGuesses[2], 'd');

    });
    it('checks if fourth letter is correct', () => {
     
      assert.equal(correctGuesses[3], 'i');

    });
    it('checks if fifth letter is correct', () => {
     
      assert.equal(correctGuesses[4], 'n');

    });
    it('checks if sixth letter is correct', () => {
     
      assert.equal(correctGuesses[5], 'g');

    });
  });
} else {

  getPrompt();
  checkForWinOrLose();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
