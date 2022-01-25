'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
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

    return `${letter} is a correct guess!`
   
} else if (correctLetters.includes(letter) === false) {
   
    wrongGuesses.push(letter)

    return `${letter} does not exist in the word you are trying to guess`
}
 
};


const checkForWinOrLose = () => {
  for (let i = 0; i < correctLetters.length; i++) {
    if( correctLetters[i] === correctGuesses[i]){
     
      return `Youve won the game! `

    } else if (wrongGuesses > 7) {

      return `Sorry You Lose!`
    }
  }
}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('selectedWord ', (answer) => {
    console.log( checkForWin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // describe('#pigLatin()', () => {
  //   it('should translate a simple word', () => {
  //     assert.equal(pigLatin('car'), 'arcay');
  //     assert.equal(pigLatin('dog'), 'ogday');
  //   });
  //   it('should translate a complex word', () => {
  //     assert.equal(pigLatin('create'), 'eatecray');
  //     assert.equal(pigLatin('valley'), 'alleyvay');
  //   });
  //   it('should attach "yay" if word begins with vowel', () => {
  //     assert.equal(pigLatin('egg'), 'eggyay');
  //     assert.equal(pigLatin('emission'), 'emissionyay');
  //   });
  //   it('should lowercase and trim word before translation', () => {
  //     assert.equal(pigLatin('HeLlO '), 'ellohay');
  //     assert.equal(pigLatin(' RoCkEt'), 'ocketray');
  //   });
  // });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
