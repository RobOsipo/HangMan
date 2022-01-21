

const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll(".figure-part");

const words = ['coding', 'knight', 'developer', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// This is to show the hidden word //

function displayWord(){
    wordE1.innerHTML = `
    ${selectedWord
    .split('')
    .map(letter => `
    <span class="letter">
    ${correctLetters.includes(letter) ? letter : ''}
    </span>`
// The ) below closes my map function 
    )
    .join('')}`;

  //-------- From RegEx tutorial --------//
const innerWord = wordE1.innerText.replace(/\n/g, '');
///////////////////////////////////////////////////////////


if (innerWord === selectedWord) {
    finalMessage.innerText = 'Conragulations! You Won The Game'
    popup.style.display = 'flex';
    }

}

// Update The Wrong Letters //
function updateWrongLetterE1() {
    // Display wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // Display parts of hangMan
    figureParts.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // Check if lost game //
    if (wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Sorry! You Lost!';
        popup.style.display = 'flex'
    }
}


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

    // Restart game and play again //

    playAgainBtn.addEventListener('click', () => {
        //Empty arrays
        correctLetters.splice(0);
        wrongLetters.splice(0);

        selectedWord = words[Math.floor(Math.random() * words.length)];

        displayWord();

        updateWrongLetterE1();

        popup.style.display = 'none';
    });

    displayWord();