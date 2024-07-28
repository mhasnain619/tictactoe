import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./components/Winning_Combination.js"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],

]


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}



function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firtSquareSymbol = gameBoard[combination[0].row[combination[0].column]]
    const secondSquareSymbol = gameBoard[combination[1].row[combination[1].column]]
    const thirdSquareSymbol = gameBoard[combination[2].row[combination[2].column]]


    if (firtSquareSymbol && firtSquareSymbol === secondSquareSymbol && firtSquareSymbol === thirdSquareSymbol) {
      winner = firtSquareSymbol;


    }



    function handleSelectSquare(rowIndex, colIndex) {
      // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
      setGameTurns((prevTurns) => {
        const currentPlayer = deriveActivePlayer(prevTurns)
        const updatedTurns = [
          { square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns
        ]
        return updatedTurns
      })
    }

    return (
      <>
        <main id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName='Hasnain' symbol='X' isActive={activePlayer === 'X'} />
            <Player initialName='Ali' symbol='O' isActive={activePlayer === 'O'} />
          </ol>
          {winner && <p>you won, {winner}!</p>}
          <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
        </main>
        <Log turns={gameTurns} />
      </>
    )
  }
}
export default App
