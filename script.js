// add on click event listener to tiles

let gameBoard = (function () {
  let gameBoardArray = Array(9).fill("");
  const tiles = document.querySelectorAll(".tile");
  const restart = document.querySelector(".restart");
  restart.addEventListener("click", resetBoard);
  function resetBoard() {
    for (let i = 0; i < gameBoardArray.length; i++) {
      gameBoardArray[i] = "";
    };
    console.log(gameBoardArray);
    fillBoard();
  }
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
On game over add a display element that congratulates winner
Add confetti
Scaling smoothly

*/
