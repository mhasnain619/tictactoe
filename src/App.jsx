import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],

]

const WINNING_COMBINATIONS = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 0, col: 0 }
  ]
]

function deriveActivePlayer(ganeTurns) {
  let currentPlayer = 'X'
  if (ganeTurns.length > 0 && ganeTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}



function App() {
  const [ganeTurns, setGaneTurns] = useState([])
  // const [hasWinner, setHasWinner] = useState(false)
  // const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = deriveActivePlayer(ganeTurns);
  let gameBoard = initialGameBoard;

  for (const turn of ganeTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firtSquareSymbol = gameBoard[combination[0].row[combination[0].column]]
    const secondSquareSymbol = gameBoard[combination[1].row[combination[1].column]]
    const thirdSquareSymbol = gameBoard[combination[2].row[combination[2].column]]


    if (firtSquareSymbol && firtSquareSymbol == secondSquareSymbol && firtSquareSymbol == thirdSquareSymbol) {
      winner = firtSquareSymbol;


    }



    function handleSelectSquare(rowIndex, colIndex) {
      // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
      setGaneTurns((prevTurns) => {
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
        <Log turns={ganeTurns} />
      </>
    )
  }
}
export default App
