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



/*----------------------------- Event Listeners -----------------------------*/


