// add on click event listener to tiles

let gameBoard = (function () {
  let gameBoardArray = Array(9).fill("");
  const tiles = document.querySelectorAll(".tile");
  const fillBoard = function () {
    for (let i = 0; i < tiles.length; i++) {
      // console.log(tiles[i]);
      // console.log(gameBoard[i]);
      if (gameBoardArray[i] === "X") {
        tiles[
          i
        ].innerHTML = `<div class='tile-content x' id='${i}'>${gameBoardArray[i]}</div>`;
      } else {
        tiles[
          i
        ].innerHTML = `<div class='tile-content o' id='${i}'>${gameBoardArray[i]}</div>`;
      }
    }
  };

  tiles.forEach((tile) => {
    tile.addEventListener("click", addMarker);
  });

  function addMarker(e) {
    // if tile is empty
    if (gameBoardArray[e.target.id] === "") {
      //add marker to gameboard array
      //get current player
      if (displayController.currentPlayer() === 1) {
        gameBoardArray[e.target.id] = "X";
      } else {
        gameBoardArray[e.target.id] = "O";
      }
      fillBoard();
      //switch to next player
      displayController.nextTurn();
      const winner = displayController.testGameOver();
      console.log("winner " + winner);
      if (winner === 1) {
        console.log("playerOne wins")
      }
      else if (winner === 2)
      {
        console.log("playerTwo wins")
      }
      else if (winner === 0)
      {
        console.log('Tie');
      }
    }
  }

  return {
    fillBoard: fillBoard,
    addMarker: addMarker,
    gameBoardArray: () => { 
        return gameBoardArray; }
  };
})();

let displayController = (function () {
  let currentPlayer = 1;
  const playerOne = document.getElementById("player-one");
  const playerTwo = document.getElementById("player-two");
  // switch to next player
  function nextTurn() {
    if (currentPlayer === 1) {
      playerOne.classList.remove("active-turn");
      playerTwo.classList.add("active-turn");
      currentPlayer = 2;
    } else {
      playerOne.classList.add("active-turn");
      playerTwo.classList.remove("active-turn");
      currentPlayer = 1;
    } // move highlight on UI
  }
  function testGameOver() {
    const playerOneWin = testMarkerWin('X');
    const playerTwoWin = testMarkerWin('O');
    if (playerOneWin && playerTwoWin) return 0;
    else if (playerOneWin) return 1;
    else if (playerTwoWin) return 2;
    else return -1;
  }

  function testMarkerWin(marker) {
    // [0][1][2]  [3][4][5]  [6][7][8]
    //  Rows       0,1,2 || 3,4,5 || 6,7,8
    const board = gameBoard.gameBoardArray();
    // console.log(board[0] + " " + board[1] + " " + board[2]);
    if (board[0] === board[1] && board[0] === board[2]) {
        if (board[0] === marker) return true;
    }
    if (board[3] === board[4] && board[3] === board[5]) {
        if (board[3] === marker) return true;
    }
    if (board[6] === board[7] && board[6] === board[8]) {
        if (board[6] === marker) return true;
    }
    //  Diagonals  0,4,8 || 2,4,6
    if (board[0] === board[4] && board[0] === board[8]) {
        if (board[0] === marker) return true;
    }
    if (board[2] === board[4] && board[2] === board[6]) {
        if (board[2] === marker) return true;
    }
    //  Columns    0,3,6 || 1,4,7 || 2,5,8
    if (board[0] === board[3] && board[0] === board[6]) {
        if (board[0] === marker) return true;
    }
    if (board[1] === board[4] && board[1] === board[7]) {
        if (board[1] === marker) return true;
    }
    if (board[2] === board[5] && board[2] === board[8]) {
        if (board[2] === marker) return true;
    }
  }
  return {
    nextTurn: nextTurn,
    currentPlayer: () => {
      return currentPlayer;
    },
    testGameOver: testGameOver,
  };
})();

const playerFactory = (name, marker) => {
  // const sayHello = () => console.log('hello!');
  return { name, marker, element };
};

// gameBoard.fillBoard();

/*
TODO:

Input name 
include a button to start/restart 
On game over add a display element that congratulates winner
Add confetti

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
