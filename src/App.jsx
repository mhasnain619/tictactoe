import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Hasnain' symbol='X' />
        <Player initialName='Ali' symbol='O' />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} />
    </main>
  )
}

export default App
