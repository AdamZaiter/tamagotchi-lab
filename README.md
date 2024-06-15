# Tamagotchi Game is the game of choice we are creating. 

![image](https://github.com/AdamZaiter/tamagotchi-lab/assets/161236340/5da677a3-9be1-4b32-8a5a-b89cbe95996f)


# Game description
    This is a simple game where your goal is to take care of a 'digital' creature. You take care of this creature by playing, feeding, and putting it to sleep. You need to keep each one of those values (Playing, feeding, and putting it to sleep) below 10. If 10 is reached then you lose the game. Reset to play again.

Github link: https://github.com/AdamZaiter/tamagotchi-lab

# Instructions: 
1. Clicking play reduces the boredom level.
2. Clicking feed reduces the hunger level. 
3. Clicking sleep reduces the sleepiness level. 
4. The game will update every 2 seconds, adding to the boredom, hunger, and sleepiness. Randomly. 
5. If any of the 3 levels reach 10, then the player loses.
6. In order to play again, click "Play again" at the bottom and the game will reset.

# Future enhancements list:
- I can add sound effects for click interactions.
- I can add different levels of difficulty.
- I can add different creatures, each of which would require their own "needs".
- Possibly add animations to the UI.

# Tech used:
- HTML
- CSS (Flexbox)
- JavaScript (Dom Manipulation)

# Step by step instructions to complete project:
1. Set up the proejct
    - Navigate to Labs in directory.
    - Create file
    - Create repository on Github
    - Clone repository 
    - Create directories in the file
    -  Open in VS code.
2. Add the starter code
    - Add the HTML starter code provided by the project
    - Add the CSS styles provided by the project 
    - Add the Java Script boilerplate. Keep boilerplate in the project.
3. Impliment the game logic
    - Define game state:
        - Boredom, hunger, and sleepiness
    - Cache Element References
        - Cache the references to the DOM for stats and buttons.
    - Initialize the game
        - create init function to initialize the game.
    - Update the game state
        - create the rungame function to update state and check for the "game over" conditions
    - Render game state
        - Create render based on current state to push to UI.
    - Handle button clicks
        - Use functions to handle when user clicks on Play, Feed, and Sleep buttons. Link them to reset the respective stat.
4. Add the image asset.
    - See instructions above with the image directory to add image.
5. Deploy the game
    - Deploy to github. Make sure to commit to github often so that your files and changes are saved in the event you have trouble figuring out whats going on.
6. LET THE WORLD SEE YOUR GAME! GO PUBLIC!


# Sources:

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Event listeners)

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList (Class lists)

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById (get Element By Id)

https://www.basedash.com/blog/init-function-in-javascript-explained (function init()) 

# Author:
Adam Zaiter
