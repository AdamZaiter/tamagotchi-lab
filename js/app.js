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


/*----------------------------- Event Listeners -----------------------------*/


