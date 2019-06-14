// Docusaurus Default Imports
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from '../../styles.module.css';





// Params:
// - global constants that are used across the entire application
//////////////////////////////////////////////////////////

// Cell for testing
const TEST_CELL = 'This is a cell.';

// Row for testing
const TEST_ROW = ['This', 'is', 'a', 'row.'];

// Grid for testing
const TEST_GRID = [
  [0, 0, 0],
  [0, 0 ,0],
  [0, 0, 0],
];

// Grid for ClickTable
const CLICKTABLE_GRID = [
  [1, 2, 3],
  [4, 5 ,6],
  [7, 8, 9],
];

// Zone for testing
const TEST_ZONE = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

// A 25x25 tic tac toe grid
const TTT_GRID = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Set the size of the board for the overlay and game state
// 🔥 Ideally chaning this parameter to match the grid size will allow for arbitrarily sized games
// 3x3, 6x6, 9x9, etc...
const BOARD_SIZE = 9;



// General App Functions:
// - functions that are generally useful across the app
//////////////////////////////////////////////////////////

// Canary that disappears if there's a breaking error
function Canary() {
  return <div className='canary'>{'🐤'}</div>;
}

// Global Keys
// Create a global counter to create new keys for the app
let globalKeyCount = 0;
// Create new keys by incrimenting the global key count
function createKey() {
  let key = (globalKeyCount + 1).toString();
  globalKeyCount += 1;
  return key;
}




// Pixelated Tic Tac Toe Board:
// - functions to create arbitrarily sized tic tac toe boards made out of pixels
// - these pixels are the same as used in Game Of Life boards
//////////////////////////////////////////////////////////

// Create a cell from a numerical value
const TTTCell = (value) => (
    // where value is either 0 or 1
    <td className={`${value.value === 1 ? 'cell alive' : 'cell dead'}`}></td>
);

// Create a row in a table from an array
function TTTRow(props) {
  let row = [];
  for (let i=0; i<props.value.length; i++) {
    row.push(<TTTCell value={props.value[i]} key={createKey()} />);
  }
  return <tr className='row'>{row}</tr>
}

// Create a table from an array of arrays (grid)
function TTTTable(props) {
  let table = [];
  for (let i=0; i<props.value.length; i++) {
    table.push(<TTTRow value={props.value[i]} key={createKey()}/>);
  }
  return <table className='table'><tbody>{table}</tbody></table>
}


// State Transistion Functions for GOL TTT Boards
//////////////////////////////////////////////////////////

// Get an array of activations that corresponds to a zone #
// 🔥 Make this work for arbitrarily sized grids, not just the params that are hard coded in
function getZoneActivations(player, zoneNumber) {
  // player is either 'x' or 'o'
  // zoneNumber is either 'testGrid', 'testZone', or '1' through '9'
  
  // init params
  let activations = [];
  const TTT_GRID_X_PATTERN = [53, 57, 79, 81, 105, 129, 131, 153, 157];
  const TTT_GRID_O_PATTERN = [55, 79, 81, 103, 107, 129, 131, 155];
  
  // TEST_GRID
  if (zoneNumber === 'testGrid') {
    // I just like the way this looks
    activations = [1, 2, 6, 7, 9];
  }
  
  // TEST_ZONE
  if (zoneNumber === 'testZone') {
    // player x
    if (player === 'x') {
      activations = [9, 13, 17, 19, 25, 31, 33, 37, 41];
    }
    // player o
    if (player === 'o') {
      activations = [11, 17, 19, 23, 27, 31, 33, 39];
    }
  }
  
  // TTT_GRID
  // Row 1
    // Zone 1
    if (zoneNumber === '1') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN;
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN;
      }
    }
    // Zone 2
    if (zoneNumber === '2') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 8);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 8);
      }
    }
    // Zone 3
    if (zoneNumber === '3') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 16);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 16);
      }
    }
  // Row 2
    // Zone 4
    if (zoneNumber === '4') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 200);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 200);
      }
    }
    // Zone 5
    if (zoneNumber === '5') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 208);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 208);
      }
    }
    // Zone 6
    if (zoneNumber === '6') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 216);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 216);
      }
    }
  // Row 3
    // Zone 7
    if (zoneNumber === '7') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 400);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 400);
      }
    }
    // Zone 8
    if (zoneNumber === '8') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 408);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 408);
      }
    }
    // Zone 9
    if (zoneNumber === '9') {
      // player x
      if (player === 'x') {
        activations = TTT_GRID_X_PATTERN.map((x) => x + 416);
      }
      // player o
      if (player === 'o') {
        activations = TTT_GRID_O_PATTERN.map((x) => x + 416);
      }
    }
  
  // return the activations
  return activations
}

// State transition function
function STF(player, zoneNumber, oldState) {
  // player is either 'x' or 'o'
  // zoneNumber is '1' - '9', but not zero indexed
  // oldState is a square activation grid (either 7x7 or 25x25)
  
  // init params
  let newState = [];
  let count = 0;
  let activations = getZoneActivations(player, zoneNumber);
  
  // iterate through data
  for (let i=0; i<oldState.length; i++) {
    newState.push([]);
    for (let j=0; j<oldState[i].length; j++) {
      // NOTE: incrimenting the count BEFORE using it removes 0 indexing
      // the first cell on the grid corresponds to count=1, not count=0
      count += 1;
      for (let k=0; k<activations.length; k++) {
        
        // match the count with the activations and update the state
        if (count === activations[k]) {
          newState[i][j] = 1;
          // break out of the loop, otherwise the program will keep looping through the rest of the activations after matching, overwriting the match with non-matches
          break 
        } else {
            newState[i][j] = oldState[i][j];
          }
      }
    }
  }
  
  // return new state in the form of a TTT_GRID (not a <Table /> ready to be rendered)
  // it's important that the output is a grid so that it can be fed to a Game Of Life algorithm
  return newState
}


// Game State and Clickable Table Overlay:
// - an invisible table that sits on top of the TTT board and logs clicks
// - it then updates the game state from those clicks
// - and calls the STF() to render the grid to match the game state
//////////////////////////////////////////////////////////

// check for win(GOL), draw(reset), or ongoing game (null)
// 🔥 Make this work for arbitrarily sized grids, not just the params that are hard coded in
function endGame(squares) {
  
  // winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // check for winning combinations
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return 'the winner is ' + squares[a];
    }
  }
  // check for a draw
  if (!squares.includes(null)) {
    return 'draw'
  }
  // return null if there is no winner and the game is not over
  return null;
}

// Creates a clickable square button
function Square(props) {
  return (
    <button className="click-square" onClick={props.onClick} id={props.value}>
    </button>
  );
}

// The board that manages the game state
class Board extends React.Component {
  
  // init Board state
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      squares: Array(BOARD_SIZE).fill(null),
      grid: TTT_GRID,
      mirror: TTT_GRID,
    };
  }
  
  // perform one iteration of grid update
  GOL() {

    // init params
    let theGrid = this.state.grid;
    let mirrorGrid = this.state.mirror;
    let gridHeight = 25;
    let gridWidth = 25;
    
    // check to make sure that the board has enough cells to function
    const componentWillUnmount = () => {
      clearInterval(this.timerID);
    }
    let threshold = 100;
    let count = 0;
    for (let a=0; a<theGrid.length; a++) {
      for (let b=0; b<theGrid[0].length; b++) {
        if (theGrid[a][b] === 1) {
          count += 1;
        }
      }
    }
    if (count < threshold) {
      // unmount the GOL and freeze the grid
      componentWillUnmount();
      // resetting this.state, theGrid, and mirrorGrid allows the GOL to continue looping
      /* 
      this.setState({
        xIsNext: true,
        squares: Array(BOARD_SIZE).fill(null),
        grid: TTT_GRID,
        mirror: TTT_GRID,
      });
      theGrid = this.state.grid;
      mirrorGrid = this.state.mirror;
      */
    }
    
    // iterate through the grid
	  for (var j = 1; j < gridHeight - 1; j++) { //iterate through rows
	    for (var k = 1; k < gridWidth - 1; k++) { //iterate through columns
	      
        // totalCells is the total amount of neighbors a cell has
        var totalCells = 0;
	      //add up the total values for the surrounding cells
	      totalCells += theGrid[j - 1][k - 1]; //top left
	      totalCells += theGrid[j - 1][k]; //top center
	      totalCells += theGrid[j - 1][k + 1]; //top right
	      totalCells += theGrid[j][k - 1]; //middle left
	      totalCells += theGrid[j][k + 1]; //middle right
	      totalCells += theGrid[j + 1][k - 1]; //bottom left
	      totalCells += theGrid[j + 1][k]; //bottom center
	      totalCells += theGrid[j + 1][k + 1]; //bottom right
        
        // apply the GOL rules
        if (totalCells > 3) {
          mirrorGrid[j][k] = 0;
        }
        if (totalCells === 3) {
          mirrorGrid[j][k] = 1;
        }
        if (totalCells === 2) {
          mirrorGrid[j][k] = theGrid[j][k];
        }
        if (totalCells < 2) {
          mirrorGrid[j][k] = 0;
        }
	    }
	  }

	  //mirror edges to create wraparound effect
	  for (var l = 1; l < gridHeight - 1; l++) { //iterate through rows
	    //top and bottom
	    mirrorGrid[l][0] = mirrorGrid[l][gridHeight - 3];
	    mirrorGrid[l][gridHeight - 2] = mirrorGrid[l][1];
	    //left and right
	    mirrorGrid[0][l] = mirrorGrid[gridHeight - 3][l];
	    mirrorGrid[gridHeight - 2][l] = mirrorGrid[1][l];
	  }

	  // update the grids
	  let temp = theGrid;
	  theGrid = mirrorGrid;
	  mirrorGrid = temp;
    
    // update the state
    this.setState({
      grid: theGrid,
      mirror: mirrorGrid,
    });
  }
  
  // change the state when the player clicks a button
  handleClick(i) {

    // this is the function that starts the GOL loop
    const componentDidMount = () => {
      this.timerID = setInterval(
        () => this.GOL(),
        1
      );
    }
    /*
    // this is the function that stops the GOL loop
    const componentWillUnmount = () => {
      clearInterval(this.timerID);
    }
    */
    
    // get the current game state.
    const squares = this.state.squares.slice();
    // if the square is already played, no more clicking
    if (squares[i]) {
      return;
    }
    // if the square is not played, process the player's move
    squares[i] = this.state.xIsNext ? 'x' : 'o';
    
    // check the end game
    // 🔥 this needs to be refactored into it's own module
    let currentEndGame = endGame(squares);
    // if there is a draw reset the game
    if  (currentEndGame === 'draw') {
      setTimeout(() => {
        this.setState({
          xIsNext: true,
          squares: Array(BOARD_SIZE).fill(null),
          grid: TTT_GRID,
        })
      },
      1999);
    }
    // if there is a winner init the GOL
    if (currentEndGame !== 'draw' && currentEndGame !== null) {
      // wait 3 seconds, then start the GOL loop
      setTimeout(() => {
        // this initializes the GOL
        componentDidMount()
      },
      1999);
    }
    
    // If the game is has not ended, add the player's move to the game board
    let currentPlayer = squares[i];
    // 📍 (i+1) because the squares are 0 indexed but the grid zones are not
    let currentZone = (i + 1).toString(); 
    let currentGrid = this.state.grid;
    // transition the state
    this.setState({
      xIsNext: !this.state.xIsNext,
      squares: squares,
      grid: STF(currentPlayer, currentZone, currentGrid),
    });
    
    // Once the player has made a move, wait a bit and let the board react
    // 📍 the board is always 'o'
    let newStuff = randomMove(squares);
    console.log('state squares:');
    console.log(this.state.squares);
    setTimeout(() => {
      console.log('TIMEOUT WORKED');
      // update the state
      this.setState({
        xIsNext: !this.state.xIsNext,
        squares: newStuff[0],
        // 📍 (newStuff[0]+1) because the squares are 0 indexed but the grid zones are not
        grid: STF('o'.toString(), (newStuff[1]+1).toString(), this.state.grid),
      })
    },
    2000);
    
    // check the end game again because a new move has been processed
    // 🔥 this needs to be refactored into it's own module
    let newEndGame = endGame(squares);
    // if there is a draw reset the game
    if  (newEndGame === 'draw') {
      setTimeout(() => {
        this.setState({
          xIsNext: true,
          squares: Array(BOARD_SIZE).fill(null),
          grid: TTT_GRID,
        })
      },
      1999);
    }
    // if there is a winner init the GOL
    if (newEndGame !== 'draw' && newEndGame !== null) {
      // wait 3 seconds, then start the GOL loop
      setTimeout(() => {
        // this initializes the GOL
        componentDidMount()
      },
      1999);
    }
  }

  // create a clickable square button for the player to interact with
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        id={i}
      />
    );
  }

  // create a table of clickable square buttons
  render() {

    // return the new state based on player input
    // 🔥 Make this work for arbitrarily sized grids, not just the params that are hard coded in
    //    - Tic Tac Toe Triage 4 has some code that does this
    return (
      <div>
        <div className='over'>
          <div className='table'>
            <div>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div>
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div>
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>            
          </div>
        </div>
        <div className='under'>
          <TTTTable value={this.state.grid}/>
        </div>
      </div>
    );
  }
}




// Making the board interactive
// - an "AI" player that makes the tic tac toe game interactive
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// ❓ Wait... if I impliment a real minimax alg, the human will never win...
// ❓ That might be kind of boring, and then they'd never be able to get a reward at the end
// ❓ I think it would be more fun to just make the board randomly select an open zone
// 💭 Ok... so the totally randomized board mozes are really boring. Would it be worth creating a half-baked minimax player?
// 💭 Or is it more fun to give the player a "boost" by letting them win, then giving them a prize?

function randomMove(squares) {
  // the computer is 'o'
  // takes in squares array representing the current board state
  // returns newSquares array that includes the board's move

  // init params
  let newSquares = squares;
  let len = squares.length;
  let openMoves = [];
  
  // iterate through the squares and find open moves
  for (let i=0; i<len; i++) {
    if (squares[i] === null) {
      openMoves.push(i)
    }
  }
  
  // randomly choose one of the available moves
  let newMove = openMoves[Math.floor(Math.random()*openMoves.length)];
  newSquares[newMove] = 'o';
  
  // return the new array that includes the new move
  let newStuff = [newSquares, newMove];
  return (newStuff);
}



// Tic Tac Toe App
//////////////////////////////////////////////////////////
class TicTacToeApp extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='app-body'>
          <div className='app-body-div'>
            <Board />
          </div>
        </div>
      </div>
    );
  }
}





















// A container for the Tic Tac Toe board 
function TicTacToeContainer() {
	return(
		<div
			style={{
				float: 'right', 
			}}
		>
			<div 
				style = {{
					display: 'grid',
					height: '100%',
				}}
			>
				<div
					style = {{
						maxWidth: '25vw',
						maxHeight: '25vw',
						margin: 'auto',
					}}
				>
					<TicTacToeApp />	
				</div>
			</div>
		</div>
	)
}


const	projectTextHeader = 'Tic Tac Toe'
const projectTextBody = 'Play to win a prize.'
const	projectLink = 'https://www.burrrata.ch/tic-tac-toe'



// Text area with title and body
function Text(props) {
	return (
		<div 
			style={{
				float: 'left',
				textAlign: 'left',
			}}
		>
			<a href={props.projectLink}>
				<h2>
					{props.projectTextHeader}
				</h2>
			</a>
			<br />
			<p>
				{props.projectTextBody}
			</p>
		</div>
	);
}


// Generic App Section Component
function TicTacToe() {
	return (
		<div className='projectContainer'>
			<Text 
				projectLink={projectLink}
				projectTextHeader={projectTextHeader}
				projectTextBody={projectTextBody}
			/>
			<TicTacToeContainer />
		</div>
	);
}


// This component is meant to be a template that you copy/paste and modify, not export and use directly
export default TicTacToe
