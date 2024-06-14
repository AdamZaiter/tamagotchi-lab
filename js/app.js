/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// Define the variables used the stack the state of the game.
let state = {
    boredom: 0, // Initializes boredom to 0
    hunger: 0, // Initalizes hunger to 0
    sleepiness: 0 // Initalizes sleepiness to 0
}; 

let timer; // Timer variable
let gameOver; // gameOver variable to represent if player lost the game.

/*------------------------ Cached Element References ------------------------*/
// Store cached element references
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');
// 3 elements stored. Boredom, Hunger, and Sleepiness 

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');
// Play, feed, and sleep buttons 

const gameMessageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('restart');
// game over message and reset buttons

/*-------------------------------- Functions --------------------------------*/
// initalize the game upon loading and function called to render game state
function init() {
    console.log('Game initialized'); // logged for debugging
    gameOver = false; // setting game over to false
    state.boredom = 0; // This will reset boredom
    state.hunger = 0; // this will reset hunger
    state.sleepiness = 0; // this will reset sleepiness

    resetBtnEl.classList.add('hidden'); // This will allow me to hide the reset button.
    gameMessageEl.classList.add('hidden'); // This will allow me to hide the game over message.

    timer = setInterval(runGame, 2000); // Setting the interval so that the game runs every 2 seconds 

    render(); // Calling render to update to the UI.
}

function runGame() {
    updateStates(); // Updates the state of the game.
    checkGameOver(); // Checks if the game is over.
    render(); // Render updated state.
}

function updateStates() {
    state.boredom += Math.floor(Math.random() * 4);  // Increment boredom by random number (between 0 and 3)
    state.hunger += Math.flood(Math.random() * 4); // Increment hunger by random number (between 0 and 3)
    state.sleepiness += Math.floor(Math.random() * 4); // Increment sleepiness by random number (between 0 and 3)
}

function render() { // Render function to update state to player 
    boredomStatEl.textContent = state.boredom; // Updates the display of boredom
    hungerStatEl.textContent = state.hunger; // Updates the display of hunger
    sleepinessStatEl.textContent = state.sleepiness; // Updates the display of sleepiness 

    // If statements for control flow
    if (gameOver) {
        clearInterval(timer); //Stops the game loop if the game is over (if gameOver is true)
        gameMessageEl.classList.remove('hidden'); // This will show the game over message (remove hidden)
        resetBtnEl.classList.remove('hidden'); // Shows the reset button (removes the hidden reset button)
    }
}

function checkGameOver() {  // This function will check if the game is over.
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) { // This 'if statement' will check if any of the properties are valued at more than 10.
        gameOver = true; // If the above pseudocode is true, gameOver will be assigned to true. 
    }
}

function playBtnClick() { // Created a function to handle the play button click.
    state.boredom = 0; // set the state.boredom to 0. 
    render(); // Render the updates made.
}



/*----------------------------- Event Listeners -----------------------------*/


