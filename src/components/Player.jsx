import React, { useState } from 'react'

function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState()
    function handleEditClick() {
        setIsEditing((editing) => !editing)
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
    }
    let editAbleplayerName = <span className="player-name">{playerName}</span >
    if (isEditing) {
        editAbleplayerName = <input type="text" value={playerName} required onChange={handleChange} />
    }

    return (
        <li className={isActive}>
            <span className="player">
                {editAbleplayerName}
                <span className="player-symbol">{symbol}</span >
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player
