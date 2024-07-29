import React, { useState } from 'react'

function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState()
    function handleEditClick() {
        setIsEditing((editing) => !editing)
        if (isEditing) {

            onChangeName(symbol, playerName)
        }
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
    }
    let editAbleplayerName = <span className="player-name">{playerName}</span >
    if (isEditing) {
        editAbleplayerName = <input type="text" value={playerName} required onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editAbleplayerName}
                <span className="player-symbol">{symbol}</span >
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player
