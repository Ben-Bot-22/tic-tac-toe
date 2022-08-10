let gameBoard = (function () {
    let gameBoard = ['X','X','X','X','X','X','X','X','X',];
    const fillBoard = function() {
        const tiles = document.querySelectorAll(".tile");
        for (let i = 0; i < tiles.length; i++) {
            console.log(tiles[i]);
            console.log(gameBoard[i]);
          tiles[i].innerHTML = gameBoard[i];
        }
    }
    
    // add on click event listener to tiles
    document.querySelectorAll();
    // if tile is empty 
    //   add marker
    //   switch to next player
    
    const playerTurn = function() {

    }
    return {
        fillBoard: fillBoard,
    }
})();

let displayController = (function () {
    
})();

const playerFactory = (name, marker) => {
    // const sayHello = () => console.log('hello!');
    return { name, marker };
};

let playerOne = {
    name: "",
    marker: "X"
}

let playerTwo = {
    name: "",
    marker: "O"
}

gameBoard.fillBoard();


/*
TODO:

Click spot to add a marker
Switch between playerOne and playerTwo
Players can only play empty spots


Build the functions that allow players to add marks to a specific spot on the board, 
and then tie it to the DOM, letting players click on the gameboard to place their marker. 
Don’t forget the logic that keeps players from playing in spots that are already taken!



Build the logic that checks for when the game is over! Should check for 
3-in-a-row and a tie.


Clean up the interface to allow players to put in their names, 
include a button to start/restart 
the game and add a display element that congratulates the winning player!




Scaling smoothly
Tic tac toe wave (go down when hover over 1 of words)

Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
Start by just getting the computer to make a random legal move.
Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable 
AI using the minimax algorithm (read about it here, some googling will help you out with this one)
If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!


****************************************************************

You’re going to store the gameboard as an array inside of a Gameboard object, 
so start there! Your players are also going to be stored in objects… and you’re 
probably going to want an object to control the flow of the game itself.
    Your main goal here is to have as little global code as possible. 
    Try tucking everything away inside of a module or factory.
    Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
    If you need multiples of something (players!), create them with factories.

Set up your HTML and write a JavaScript function that will render the contents of the 
gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)

*/
