let secretNumber = getRandomNumber();
let score = 20;
let highscore = 0;

// DOM ELEMENTS
const scoreElement = document.querySelector('.score');
const messageElement = document.querySelector('.message');
const bodyElement = document.querySelector('body');
const winningNumberElement = document.querySelector('.winning-number');
const guessBtnElement = document.querySelector('.btn-guess');
const restartBtnElement = document.querySelector('.btn-restart');
const highscoreElement = document.querySelector('.highscore');
const guessElement = document.querySelector('.guess');


//GUESS BUTTON EVENT LISTENER
guessBtnElement.addEventListener('click', () => {
    const guess = Number(guessElement.value)
    
    if (!guess || guess < 1 || guess > 20) {
        setMessage('Please enter a number between 1 and 20');
    } else if (guess === secretNumber){
        setMessage('Correct! You Win!');
        endGame('green')
        
        if (score > highscore){
            setHighscore();
        }
    } else {
        setScore();
        if (score > 0){
            guess > secretNumber ? 
            setMessage('Too High') : setMessage('Too Low');
        } else {
            setMessage('You lose!');
            endGame('red')
        }
    }
});


//RESTART BUTTON EVENT LISTENER
restartBtnElement.addEventListener('click', () => {
    guessElement.value = '';
    secretNumber = getRandomNumber();
    setScore(20);
    setWinningNumberElement('15rem', '?')
    setBodyColor('#222');
    setGuessBtnEleementDisplay('block');
    setMessage('Make a guess...');
});


//SETTER/GETTER FUNCTIONS
function getRandomNumber(){
    return Math.trunc(Math.random() * 20 + 1)
}

const setMessage = (message) => {
    messageElement.textContent = message;
}

const setScore = (newScore = score - 1) => {
    score = newScore;
    scoreElement.textContent = score;
}

const setHighscore = () => {
    highscore = score;
    highscoreElement.textContent = highscore;
}

const setBodyColor = (color) => {
    bodyElement.style.backgroundColor = color;
}

const setWinningNumberElement = (width = '25rem', text = secretNumber) => {
    winningNumberElement.style.width = width;
    winningNumberElement.textContent = text;
}

const setGuessBtnEleementDisplay = (display = 'none') => {
    guessBtnElement.style.display = display;
}

//END GAME
const endGame = (color) => {
    setWinningNumberElement();
    setBodyColor(color)
    setGuessBtnEleementDisplay();
}
