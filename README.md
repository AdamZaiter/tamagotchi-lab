Tamagotchi Game is the game of choice we are creating. 

Source for the Tomatoe is "./assets/tomato.png" 
    ** in order to get that moved over I used the Terminal on my Mac and moved it **
    - Downloaded the image.
    - Saved to my downloads.
    - Created Assets directory.
        - Mkdir Assets
    - Moved the image from my downloads folder to the assets directory. 
        - mv ~/downloads/tomato.png ./assets/tomato.png
    - Update the HTML file.
        - Already included in the labs "included code"
    - Verify in browser using inspect feature.

Game description
    This is a simple game where your goal is to take care of a 'digital' creature. You take care of this creature by playing, feeding, and putting it to sleep. You need to keep each one of those values (Playing, feeding, and putting it to sleep) below 10. If 10 is reached then you lose the game. Reset to play again.

Github link: https://github.com/AdamZaiter/tamagotchi-lab

Instructions: 
1. Clicking play reduces the boredom level.
2. Clicking feed reduces the hunger level. 
3. Clicking sleep reduces the sleepiness level. 
4. The game will update every 2 seconds, adding to the boredom, hunger, and sleepiness. Randomly. 
5. If any of the 3 levels reach 10, then the player loses.
6. In order to play again, click "Play again" at the bottom and the game will reset.

Tech used:
- HTML
- CSS (Flexbox)
- JavaScript (Dom Manipulation)
