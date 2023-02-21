import React, { useState } from 'react';
import './App.css';

export default function App() {
  const defaultGrid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const [ticTacGrid, setTicTacGrid] = useState(defaultGrid);
  let [currrentPlayer, setCurrentPlayer] = useState('X');
  function resetGame() {
    setCurrentPlayer('X');
    setTicTacGrid(defaultGrid);
  }
  function onCellClick(x, y) {
    let newGrid = [...ticTacGrid];
    if (currrentPlayer === 'X') {
      newGrid[x][y] = 'X';
      setCurrentPlayer('O');
    } else {
      newGrid[x][y] = 'O';
      setCurrentPlayer('X');
    }
    setTicTacGrid(newGrid);
    checkWinLoss();
  }
  function checkWinLoss() {
    for (let i = 0; i < ticTacGrid.length; i++) {
      if (ticTacGrid[i][0] !== '') {
        if (
          ticTacGrid[i][0] === ticTacGrid[i][1] &&
          ticTacGrid[i][1] === ticTacGrid[i][2]
        ) {
          alert(ticTacGrid[i][0] + ' wins horizontal');
          resetGame();
          return;
        }
      }
      if (ticTacGrid[i][i] !== '') {
        if (
          ticTacGrid[0][i] === ticTacGrid[1][i] &&
          ticTacGrid[1][i] === ticTacGrid[2][i]
        ) {
          alert(ticTacGrid[0][i] + ' wins vertical');
          resetGame();
          return;
        }
      }
    }
    if (ticTacGrid[1][1] !== '') {
      if (
        (ticTacGrid[0][0] === ticTacGrid[1][1] &&
          ticTacGrid[1][1] === ticTacGrid[2][2]) ||
        (ticTacGrid[0][2] === ticTacGrid[1][1] &&
          ticTacGrid[1][1] === ticTacGrid[2][0])
      ) {
        alert(ticTacGrid[1][1] + ' wins diagonal');
        resetGame();
        return;
      }
    }
    const catsArray = [].concat(ticTacGrid[0], ticTacGrid[1], ticTacGrid[2]);
    if (catsArray.indexOf('') === -1) {
      alert('Cats game');
      resetGame();
    }
  }
  return (
    <div className="gameWrapper">
      <h1>React Tic Tac Toe!</h1>
      <div className="gameControls">
        <p>Current Player: {currrentPlayer}</p>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div className="gridWrapper">
        <div className="rowWrapper">
          <div className="gridCell" onClick={() => onCellClick(0, 0)}>
            {ticTacGrid[0][0]}
          </div>
          <div className="gridCell" onClick={() => onCellClick(0, 1)}>
            {ticTacGrid[0][1]}
          </div>
          <div className="gridCell" onClick={() => onCellClick(0, 2)}>
            {ticTacGrid[0][2]}
          </div>
        </div>
        <div className="rowWrapper">
          <div className="gridCell" onClick={() => onCellClick(1, 0)}>
            {ticTacGrid[1][0]}
          </div>
          <div className="gridCell" onClick={() => onCellClick(1, 1)}>
            {ticTacGrid[1][1]}
          </div>
          <div className="gridCell" onClick={() => onCellClick(1, 2)}>
            {ticTacGrid[1][2]}
          </div>
        </div>
        <div className="rowWrapper">
          <div className="gridCell" onClick={() => onCellClick(2, 0)}>
            {ticTacGrid[2][0]}
          </div>
          <div className="gridCell" onClick={() => onCellClick(2, 1)}>
            {ticTacGrid[2][1]}
          </div>
          <div className="gridCell" onClick={() => onCellClick(2, 2)}>
            {ticTacGrid[2][2]}
          </div>
        </div>
      </div>
    </div>
  );
}
