

const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
// My figure parts from my SVG hangman body 
const figureParts = document.querySelectorAll(".figure-part");

const words = ['coding', 'knight', 'developer', 'wizard'];
/// This is how it chooses a random word out of the 4 above 
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// This is to show the hidden word //

function displayWord(){
    wordE1.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <span class="letter">
    ${correctLetters.includes(letter) ? letter : ''}
    </span>`
    // This below ) closes my map function 
    )
    .join('')}`;

  //-------- From RegEx tutorial --------//
  // This displays the word randomly selected from the selectedWord variable
const innerWord = wordE1.innerText.replace(/\n/g, '');
///////////////////////////////////////////////////////////


if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You Won The Game'
    popup.style.display = 'flex';
    }

}

//// Update The Wrong Letters //
function updateWrongLetterE1() {
    //// Display wrong letters in the wrong Letters DIV
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong Guesses mock you silently here</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // Display parts of hangMan
    // parameters MUST BE (part, index)-- Originally tried (index,part) but would not work for some reason 
    figureParts.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    //// Check if lost game  ////
    if (wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Sorry! You Lost!';
        popup.style.display = 'flex'
    }
}

/// Refer to my Pac-Man project for the code below until the end of the key codes //
notification.classList.remove('show')
    /// Show notifcations
    function showNotification() {
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000)
    }

    // KeyDown Letter Press //
    window.addEventListener('keydown', e => {
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            const letter = e.key;
   
    /// I save the letter value from the keycode press into a variable to preform the logic ///
            if (selectedWord.includes(letter)){
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter);

                    displayWord();

                } else {
                    showNotification();
                }
            } else {
                if (!wrongLetters.includes(letter)){
                    wrongLetters.push(letter);

                    updateWrongLetterE1();
                } else {
                    showNotification();
                }
            }
        }
    });




    ///// Restart game and play again /////

    playAgainBtn.addEventListener('click', () => {
        
        // This Empty arrays to set up for a new game
        correctLetters.splice(0);
        wrongLetters.splice(0);

        // This selects a new random word from the words array to set up new game 
        selectedWord = words[Math.floor(Math.random() * words.length)];

        displayWord();

        updateWrongLetterE1();
        // Take away the You Won pop-up
        popup.style.display = 'none';
    });

    displayWord();