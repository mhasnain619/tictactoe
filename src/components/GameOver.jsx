
export default function GameOver({ winner, onRematch }) {
    return (
        <div id='game-over'>
            <h2>Game Over</h2>
            {winner && <p>{winner} Won!</p>}
            {!winner && <p>Match Draw</p>}
            <button onClick={onRematch}>Rematch</button>
        </div>
    )
}


