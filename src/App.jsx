import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [ganeTurns, setGaneTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGaneTurns()
  }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Hasnain' symbol='X' isActive={activePlayer === 'X'} />
        <Player initialName='Ali' symbol='O' isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      <Log />
    </main>
  )
}

export default App
